import { Schema, model, Document, Types } from "mongoose";
import { IBookAppointment } from "./book-appoinment.interface";

const BookAppointmentSchema = new Schema<IBookAppointment>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "Minimum 2 characters are required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Minimum 2 characters are required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email format",
      ],
      trim: true,
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
    },
    studyLocation: {
      type: String,
      required: [true, "Study location is required"],
      enum: ["UK", "UAE", "Canada", "Australia", "Europe"],
    },
    yearsOfStudy: {
      type: String,
      required: [true, "Start date is required"],
    },
    typeOfStudy: {
      type: String,
      required: [true, "Type of study is required"],
      enum: ["Undergraduate", "Postgraduate", "Research", "Other"],
    },
    preferredSubjects: {
      type: [String],
      default: [],
    },
    referralSource: {
      type: String,
      required: [true, "Referral source is required"],
      enum: ["Email", "Social Media", "Google", "Family & Friends", "Other"],
    },
    livingInUK: {
      type: String,
      required: [true, "Please select if you are living in the UK"],
      enum: ["Yes", "No"],
    },
  },
  {
    timestamps: true,
  }
);

const BookAppointment = model<IBookAppointment>(
  "BookAppointment",
  BookAppointmentSchema
);

export default BookAppointment;
