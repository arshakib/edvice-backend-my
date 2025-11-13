import { Schema, model } from "mongoose";
import { IHomeStudentService } from "./homestudentservice.interface";


const HomeStudentServiceSchema = new Schema<IHomeStudentService>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Minimum 3 characters are required"],
      match: [/^[A-Za-z\s]+$/, "Only letters are allowed"],
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
    levelOfStudy: {
      type: String,
      enum: ["Further Education", "Undergraduate", "Postgraduate", "Other"],
      required: [true, "Level of study is required"],
    },
    otherLevelOfStudy: {
      type: String,
      default: "",
    },
    supportNeeded: {
      type: {
        universityAdvice: { type: Boolean, default: false },
        careerGuidance: { type: Boolean, default: false },
        personalStatementHelp: { type: Boolean, default: false },
        examPreparation: { type: Boolean, default: false },
      },
      required: [true, "At least one type of support must be selected"],
    },
    otherSupport: {
      type: String,
      default: "",
    },
    alreadyApplied: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Already applied status is required"],
    },
    studyStartPlan: {
      type: String,
      enum: [
        "Within 3 months",
        "Within 6 months",
        "Within a year",
        "Not sure yet",
      ],
      required: [true, "Study start plan is required"],
    },
    currentlyStudying: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Currently studying status is required"],
    },
    financePlan: {
      type: String,
      enum: [
        "Yes, I have applied or plan to apply",
        "No, I do not plan to apply / I will fund my own studies",
        "Not sure yet",
      ],
      required: [true, "Finance plan is required"],
    },
    qualificationsExperience: {
      type: String,
      default: "",
    },
    additionalInfo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-validate hook for conditional requirements
HomeStudentServiceSchema.pre("validate", function (next) {
  // Ensure levelOfStudy or otherLevelOfStudy is provided
  if (this.levelOfStudy === "Other" && !this.otherLevelOfStudy) {
    this.invalidate(
      "otherLevelOfStudy",
      "Other level of study is required when levelOfStudy is Other"
    );
  }

  // Ensure at least one supportNeeded option or otherSupport is provided
  if (
    !this.supportNeeded.universityAdvice &&
    !this.supportNeeded.careerGuidance &&
    !this.supportNeeded.personalStatementHelp &&
    !this.supportNeeded.examPreparation &&
    !this.otherSupport
  ) {
    this.invalidate(
      "supportNeeded",
      "At least one type of support or other support must be provided"
    );
  }

  next();
});

const HomeStudentService = model<IHomeStudentService>(
  "HomeStudentService",
  HomeStudentServiceSchema
);

export default HomeStudentService;
