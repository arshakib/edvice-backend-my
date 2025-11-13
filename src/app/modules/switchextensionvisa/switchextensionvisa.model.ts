import { Schema, model } from "mongoose";
import { ISwitchExtensionVisa } from "./switchextensionvisa.interface";


const SwitchExtensionVisaSchema = new Schema<ISwitchExtensionVisa>(
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
    currentVisaType: {
      type: String,
      enum: ["graduate-visa", "student-visa", "skilled-worker-visa", "other"],
      required: [true, "Current visa type is required"],
    },
    currentVisaTypeOther: {
      type: String,
      default: "",
    },
    visaPlan: {
      type: String,
      enum: [
        "student-visa",
        "skilled-worker-visa",
        "ilr",
        "extend-student-visa",
        "extend-skilled-worker-visa",
        "not-sure",
      ],
      required: [true, "Visa plan is required"],
    },
    visaExpiryDate: {
      type: String,
      required: [true, "Visa expiry date is required"],
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
SwitchExtensionVisaSchema.pre("validate", function (next) {
  // Ensure currentVisaTypeOther is provided when currentVisaType is "other"
  if (this.currentVisaType === "other" && !this.currentVisaTypeOther) {
    this.invalidate(
      "currentVisaTypeOther",
      "Please specify the visa type when selecting Other"
    );
  }
  next();
});

const SwitchExtensionVisa = model<ISwitchExtensionVisa>(
  "SwitchExtensionVisa",
  SwitchExtensionVisaSchema
);

export default SwitchExtensionVisa;
