import { Schema, model } from "mongoose";
import { IStudentVisa } from "./studentvisa.interface";


const StudentVisaSchema = new Schema<IStudentVisa>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    applyingFor: {
      type: String,
      enum: ["student-visa", "work-visa", "tourist-visa", "business-visa"],
      required: [true, "Applying for is required"],
    },
    hasOffer: {
      type: String,
      enum: ["yes", "no", "pending"],
      required: [true, "Offer status is required"],
    },
    selfFunding: {
      type: String,
      enum: ["yes", "no", "partial", "scholarship"],
      required: [true, "Funding status is required"],
    },
    documents: {
      type: String,
      enum: [
        "passport",
        "academic-transcripts",
        "financial-documents",
        "language-test",
        "all",
        "none",
      ],
      required: [true, "Document status is required"],
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const StudentVisa = model<IStudentVisa>("StudentVisa", StudentVisaSchema);

export default StudentVisa;
