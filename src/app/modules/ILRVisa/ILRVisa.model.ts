import { Schema, model } from "mongoose";
import { IILRVisa } from "./ILRVisa.interface";


const ILRVisaSchema = new Schema<IILRVisa>(
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
      default: "",
    },
    currentVisa: {
      type: String,
      enum: [
        "skilled-worker-visa",
        "innovator-founder-visa",
        "investor-visa",
        "sole-representative-visa",
        "turkish-worker-businessperson-visa",
        "other",
      ],
      required: [true, "Current visa type is required"],
    },
    currentVisaOther: {
      type: String,
      default: "",
    },
    ukResidenceDuration: {
      type: String,
      enum: ["less-than-3-years", "3-to-5-years", "over-5-years"],
      required: [true, "UK residence duration is required"],
    },
    meetsVisaRequirements: {
      type: String,
      enum: ["yes", "not-sure", "no"],
      required: [true, "Visa requirements status is required"],
    },
    supportingDocuments: {
      type: String,
      enum: ["most-all-documents", "some-documents", "not-yet"],
      required: [true, "Supporting documents status is required"],
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

// Pre-validate hook for conditional requirements
ILRVisaSchema.pre("validate", function (next) {
  // Ensure currentVisaOther is provided when currentVisa is "other"
  if (this.currentVisa === "other" && !this.currentVisaOther) {
    this.invalidate(
      "currentVisaOther",
      "Please specify the visa type when selecting Other"
    );
  }
  next();
});

const ILRVisa = model<IILRVisa>("ILRVisa", ILRVisaSchema);

export default ILRVisa;
