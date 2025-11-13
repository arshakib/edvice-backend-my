import { Schema, model } from "mongoose";
import { IStudyVisa } from "./studyvisa.interfece";

const StudyVisaSchema = new Schema<IStudyVisa>(
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
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email format",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    studentVisa: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Student visa status is required"],
    },
    studyLevel: {
      type: String,
      enum: ["Undergraduate", "Postgraduate", "Other"],
      required: [true, "Study level is required"],
    },
    otherStudyLevel: {
      type: String,
      default: "",
    },
    unconditionalOffer: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Unconditional offer status is required"],
    },
    startDate: {
      type: String,
    },
    previousVisa: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Previous visa status is required"],
    },
    dependents: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Dependents status is required"],
    },
    challenges: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-validate hook for conditional required fields
StudyVisaSchema.pre("validate", function (next) {
  if (this.studyLevel === "Other" && !this.otherStudyLevel) {
    this.invalidate(
      "otherStudyLevel",
      "Other study level is required when studyLevel is Other"
    );
  }
  next();
});

const StudyVisa = model<IStudyVisa>("StudyVisa", StudyVisaSchema);

export default StudyVisa;
