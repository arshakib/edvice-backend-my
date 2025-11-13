
import { Schema, model } from "mongoose";
import ITestPrep from "./testprep.interface";

const TestPrepSchema = new Schema<ITestPrep>(
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
    tests: {
      type: {
        IELTS: { type: Boolean, default: false },
        SAT: { type: Boolean, default: false },
        LNAT: { type: Boolean, default: false },
        TOEFL: { type: Boolean, default: false },
      },
      required: [true, "At least one test must be selected"],
    },
    otherTest: {
      type: String,
      default: "",
    },
    targetTestDate: {
      type: String,
    },
    notSureYet: {
      type: Boolean,
      default: false,
    },
    takenBefore: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Please specify if the test was taken before"],
    },
    previousScore: {
      type: String,
    },
    targetScore: {
      type: String,
      required: [true, "Target score is required"],
    },
    lookingFor: {
      type: {
        fullCourse: { type: Boolean, default: false },
        specificCoaching: { type: Boolean, default: false },
        practiceTests: { type: Boolean, default: false },
      },
      required: [true, "At least one option for lookingFor must be selected"],
    },
    otherLookingFor: {
      type: String,
      default: "",
    },
    coachingMode: {
      type: String,
      enum: ["Online", "In-person", "Both"],
      required: [true, "Coaching mode is required"],
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

// Pre-validate hook for conditional required fields
TestPrepSchema.pre("validate", function (next) {
  // Ensure at least one test is selected
  if (
    !this.tests.IELTS &&
    !this.tests.SAT &&
    !this.tests.LNAT &&
    !this.tests.TOEFL &&
    !this.otherTest
  ) {
    this.invalidate("tests", "At least one test or otherTest must be provided");
  }

  // If takenBefore is "Yes", previousScore is required
  if (this.takenBefore === "Yes" && !this.previousScore) {
    this.invalidate(
      "previousScore",
      "Previous score is required if test was taken before"
    );
  }

  // Ensure at least one lookingFor option is selected
  if (
    !this.lookingFor.fullCourse &&
    !this.lookingFor.specificCoaching &&
    !this.lookingFor.practiceTests &&
    !this.otherLookingFor
  ) {
    this.invalidate(
      "lookingFor",
      "At least one lookingFor option or otherLookingFor must be provided"
    );
  }

  // If notSureYet is false, targetTestDate is required
  if (!this.notSureYet && !this.targetTestDate) {
    this.invalidate(
      "targetTestDate",
      "Target test date is required if notSureYet is false"
    );
  }

  next();
});

const TestPrep = model<ITestPrep>("TestPrep", TestPrepSchema);

export default TestPrep;
