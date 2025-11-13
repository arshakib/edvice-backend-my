import { Schema, model } from "mongoose";
import { IBusinessVisa } from "./businessvisa.interface";



const BusinessVisaSchema = new Schema<IBusinessVisa>(
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
    serviceNeeded: {
      type: String,
      enum: [
        "tier1-entrepreneur",
        "tier1-investor",
        "tier1-graduate-entrepreneur",
        "innovator-founder",
        "start-up",
        "global-talent",
        "ilr",
      ],
      required: [true, "Service needed is required"],
    },
    visaExpiryDate: {
      type: String,
      default: "",
    },
    meetsTier1Requirements: {
      type: String,
      enum: ["yes", "no", "unsure"],
      required: [true, "Tier 1 requirements status is required"],
    },
    innovatorFounder: {
      type: String,
      enum: [
        "have-endorsement",
        "need-endorsement",
        "business-plan",
        "not-applicable",
      ],
      default: "not-applicable",
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

const BusinessVisa = model<IBusinessVisa>("BusinessVisa", BusinessVisaSchema);

export default BusinessVisa;
