"use server"

import EnquiryUser from "@/models/enquiryUser";

export const addEnquiry = async (formData) => {
    try {
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
    } catch (error) {
        console.log("there is some error while saving EnquiryUser");
    }
}