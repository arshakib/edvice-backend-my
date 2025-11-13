import { Schema, model } from "mongoose";
import { IAccommodation } from "./accommodation.interface";


const AccommodationSchema = new Schema(
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
    contact: {
      type: String,
      required: [true, "Contact info (email or WhatsApp) is required"],
    },
    universityCity: {
      type: String,
      required: [true, "University or city is required"],
    },
    moveInMonth: {
      type: String,
      required: [true, "Move-in month is required"],
    },
    moveInYear: {
      type: String,
      required: [true, "Move-in year is required"],
    },
    budget: {
      type: String,
      enum: ["< £500", "£500–£700", "£700–£900", "£900+"],
      required: [true, "Budget is required"],
    },
    accommodationType: {
      type: [String],
      enum: ["Ensuite", "Studio", "Shared Flat", "Family Accommodation"],
      required: [true, "At least one accommodation type is required"],
    },
    dependents: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Dependents status is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Pre-validate hook for conditional requirements
AccommodationSchema.pre("validate", function (next) {
  if (!this.accommodationType || this.accommodationType.length === 0) {
    this.invalidate(
      "accommodationType",
      "At least one accommodation type must be selected"
    );
  }
  if (this.accommodationType.length > 2) {
    this.invalidate(
      "accommodationType",
      "A maximum of two accommodation types can be selected"
    );
  }
  next();
});

const Accommodation = model<IAccommodation>(
  "Accommodation",
  AccommodationSchema
);

export default Accommodation;
