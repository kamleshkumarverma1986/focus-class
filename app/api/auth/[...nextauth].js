import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import Admin from "@/models/admin";

const handler = NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
          type: "credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            await connectToDB();
            const { mobileNumber, otp } = credentials;
            const admin = Admin.findOne({mobileNumber, otp});
            if (admin) {
                return admin._id;
            } else {
                return null
            }
          }
        })
    ],
    pages: {
      signIn: "signin",
    },
    callbacks: {
      async session({ session }) {
        // store the user id from MongoDB to session
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
  
        return session;
      },
      async signIn({ account, profile, user, credentials }) {
        try {
          await connectToDB();
  
          // check if user already exists
          const userExists = await User.findOne({ email: profile.email });
  
          // if not, create a new document and save user in MongoDB
          if (!userExists) {
            await User.create({
              email: profile.email,
              fullname: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
          }
  
          return true;
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      },
    },
});

export { handler as GET, handler as POST };