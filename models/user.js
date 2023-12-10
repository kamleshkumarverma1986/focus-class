import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "FullName is required!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  image: {
    // profile pic
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
