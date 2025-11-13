import { Schema, model } from "mongoose";
import { IVisitorVisa } from "./visitorvisa.interfact";

const VisitorVisaSchema = new Schema<IVisitorVisa>(
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
    visitorVisaType: {
      type: String,
      required: [true, "Visitor visa type is required"],
    },
    visitPurpose: {
      type: String,
      enum: [
        "tourism",
        "study-short-courses",
        "business",
        "medical-treatment",
        "permitted-paid-engagements",
        "academic-doctor-dentist",
        "other",
      ],
      required: [true, "Visit purpose is required"],
    },
    visitPurposeOther: {
      type: String,
      default: "",
    },
    validPassport: {
      type: String,
      enum: ["yes", "no"],
      required: [true, "Valid passport status is required"],
    },
    evidenceToLeave: {
      type: String,
      enum: ["yes", "no"],
      required: [true, "Evidence to leave status is required"],
    },
    financialSupport: {
      type: String,
      enum: ["yes", "no"],
      required: [true, "Financial support status is required"],
    },
    longTermTravelRegularly: {
      type: String,
      enum: ["yes", "no"],
      default: "",
    },
    longTermTravelProof: {
      type: String,
      enum: ["yes", "no"],
      default: "",
    },
    longTermVisaDuration: {
      type: String,
      enum: ["2-years", "5-years", "10-years"],
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
VisitorVisaSchema.pre("validate", function (next) {
  // Ensure visitPurposeOther is provided when visitPurpose is "other"
  if (this.visitPurpose === "other" && !this.visitPurposeOther) {
    this.invalidate(
      "visitPurposeOther",
      "Please specify the purpose of your visit when selecting Other"
    );
  }

  // Ensure long-term visa fields are provided when visitorVisaType is "long-term-standard-visitor"
  if (
    this.visitorVisaType === "long-term-standard-visitor (2, 5, or 10 years)"
  ) {
    if (!this.longTermTravelRegularly) {
      this.invalidate(
        "longTermTravelRegularly",
        "Please specify if you travel regularly to the UK"
      );
    }
    if (!this.longTermTravelProof) {
      this.invalidate(
        "longTermTravelProof",
        "Please specify if you can show proof of return or onward travel"
      );
    }
    if (!this.longTermVisaDuration) {
      this.invalidate(
        "longTermVisaDuration",
        "Please specify the visa duration"
      );
    }
  }

  next();
});

const VisitorVisa = model<IVisitorVisa>("VisitorVisa", VisitorVisaSchema);

export default VisitorVisa;
