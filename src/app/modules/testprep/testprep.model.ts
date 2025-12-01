import { Schema, model } from "mongoose";
import ITestPrep from "./testprep.interface";

const TestPrepSchema = new Schema<ITestPrep>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    
    // --- Test Selection Group ---
    tests: {
      IELTS: { type: Boolean, default: false },
      SAT: { type: Boolean, default: false },
      LNAT: { type: Boolean, default: false },
      TOEFL: { type: Boolean, default: false },
    },
    otherTest: {
      type: String,
      trim: true,
      default: "",
    },

    notSureYet: {
      type: Boolean,
      default: false,
    },
    targetTestDate: {
      type: String,
      required: [
        function (this: ITestPrep) {
          return !this.notSureYet;
        },
        "Please select a target test date or check 'Not sure yet'",
      ],
    },

    takenBefore: {
      type: String,
      enum: {
        values: ["Yes", "No"],
        message: "Please select either Yes or No for taken before",
      },
      required: [true, "Please specify if you have taken the test before"],
    },
    previousScore: {
      type: String,
      trim: true,
      // Conditional Requirement: Required ONLY if takenBefore is "Yes"
      required: [
        function (this: ITestPrep) {
          return this.takenBefore === "Yes";
        },
        "Previous score is required since you indicated you have taken the test before",
      ],
    },

    targetScore: {
      type: String,
      required: [true, "Target score is required"],
      trim: true,
    },

    // --- Preferences Group ---
    lookingFor: {
      fullCourse: { type: Boolean, default: false },
      specificCoaching: { type: Boolean, default: false },
      practiceTests: { type: Boolean, default: false },
    },
    otherLookingFor: {
      type: String,
      trim: true,
      default: "",
    },

    coachingMode: {
      type: String,
      enum: {
        values: ["Online", "In-person", "Both"],
        message: "{VALUE} is not a valid coaching mode",
      },
      required: [true, "Please select a coaching mode preference"],
    },
    
    additionalInfo: {
      type: String,
      default: "",
      trim: true,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

TestPrepSchema.pre("validate", function (next) {
  const doc = this as ITestPrep;

  const isTestSelected =
    doc.tests.IELTS ||
    doc.tests.SAT ||
    doc.tests.LNAT ||
    doc.tests.TOEFL ||
    (doc.otherTest && doc.otherTest.trim().length > 0);

  if (!isTestSelected) {
    this.invalidate(
      "tests",
      "Please select at least one test type or specify in 'Other'"
    );
  }

  const isLookingForSelected =
    doc.lookingFor.fullCourse ||
    doc.lookingFor.specificCoaching ||
    doc.lookingFor.practiceTests ||
    (doc.otherLookingFor && doc.otherLookingFor.trim().length > 0);

  if (!isLookingForSelected) {
    this.invalidate(
      "lookingFor",
      "Please select at least one service you are looking for"
    );
  }

  next();
});

const TestPrep = model<ITestPrep>("TestPrep", TestPrepSchema);

export default TestPrep;