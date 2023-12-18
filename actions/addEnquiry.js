"use server"

import EnquiryUser from "@/models/enquiryUser";
import { connectToDB } from "@/utils/database";

export const addEnquiry = async (prevState, formData) => {
    try {
        console.log("prevState ", prevState);
        await connectToDB();
        await EnquiryUser.create({
            fullName: formData.get("fullName"),
            mobileNumber: formData.get("mobileNumber"),
            email: formData.get("email"),
            address: formData.get("address"),
            schoolName: formData.get("schoolName"),
            currentClass: formData.get("currentClass"),
            currentBoard: formData.get("currentBoard"),
            goal: formData.get("goal"),
        });
        return {message: "Data is successfully saved", status: 200}
    } catch (error) {
        console.log("there is some error while saving EnquiryUser");
        return {message: "there is some error while saving EnquiryUser", status: 500, error}
    }
}