import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Admin from "@/models/admin";
import { generateOTP, sendSMS, invalidateOTP } from "@/utils/helper";

let otpTimeoutIdForAdminLogin = null;

export async function POST(req, res) {
    try {
        await connectToDB();
        const { mobileNumber } = await req.json();
        const admin = await Admin.findOne({ mobileNumber });

        if (!admin) {
          return NextResponse.json({}, {
            status: 400,
            statusText: "You are not a Admin!"
          });
        }

        // Now we will send the OTP in mobile number
        const otp = generateOTP();
        await sendSMS({
          otp,
          mobileNumbers: [Number(mobileNumber)],
        });

        admin.otp = {
          value: otp,
          isExpire: false,
        };

        await admin.save();

        // Invalidating the OTP after specific time
        clearTimeout(otpTimeoutIdForAdminLogin);
        otpTimeoutIdForAdminLogin = invalidateOTP(admin);

        return NextResponse.json({}, {
          status: 200,
          statusText: "OTP is successfully sent!"
        });
      } catch (error) {
        return NextResponse.json({
          error: error.message
        }, {
          status: 500,
          statusText: "Something went wrong!"
        });
      }
}
