import { Schema, model } from "mongoose";
import { IFamilyVisa } from "./familyvisa.interface";

const FamilyVisaSchema = new Schema<IFamilyVisa>(
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
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true,
    },
    currentLocation: {
      type: String,
      enum: ["united-kingdom", "outside-united-kingdom"],
      required: [true, "Current location is required"],
    },
    familyMember: {
      type: String,
      enum: [
        "spouse-civil-partner",
        "fiancee-proposed-civil-partner",
        "child",
        "parent",
        "other",
      ],
      required: [true, "Family member is required"],
    },
    familyMemberOther: {
      type: String,
      default: "",
    },
    immigrationStatus: {
      type: String,
      enum: ["british-citizen", "settled-ilr", "refugee-humanitarian", "other"],
      required: [true, "Immigration status is required"],
    },
    immigrationStatusOther: {
      type: String,
      default: "",
    },
    currentVisaStatus: {
      type: String,
      default: "",
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
FamilyVisaSchema.pre("validate", function (next) {
  // Ensure familyMemberOther is provided when familyMember is "other"
  if (this.familyMember === "other" && !this.familyMemberOther) {
    this.invalidate(
      "familyMemberOther",
      "Please specify the family member when selecting Other"
    );
  }

  // Ensure immigrationStatusOther is provided when immigrationStatus is "other"
  if (this.immigrationStatus === "other" && !this.immigrationStatusOther) {
    this.invalidate(
      "immigrationStatusOther",
      "Please describe the immigration status when selecting Other"
    );
  }

  next();
});

const FamilyVisa = model<IFamilyVisa>("FamilyVisa", FamilyVisaSchema);

export default FamilyVisa;
