import { Schema, model, models } from "mongoose";

const EnquiryUserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  currentClass: {
    type: String,
    required: true,
  },
  currentBoard: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
});

const EnquiryUser = models?.EnquiryUser || model("EnquiryUser", EnquiryUserSchema);

export default EnquiryUser;
