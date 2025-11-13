import { Schema, model } from "mongoose";
import { IRecruitmentPartner } from "./recruitmentpartner.interface";


const countriesAndMarkets = [
  "Afghanistan",
  "Hungary",
  "United Kingdom",
  "United States",
  "Pakistan",
  "India",
  "Bangladesh",
  "China",
  "Nigeria",
  "Ghana",
  "Kenya",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Turkey",
  "UAE",
  "Saudi Arabia",
  "South Africa",
  "Malaysia",
  "Singapore",
  "Japan",
  "South Korea",
  "Brazil",
  "Mexico",
  "Russia",
  "Ukraine",
  "Poland",
  "Netherlands",
];

const RecruitmentPartnerSchema = new Schema<IRecruitmentPartner>(
  {
    partnerType: {
      type: String,
      required: [true, "Partner type is required"],
      enum: ["individual", "company"],
    },
    // Individual-specific fields
    firstName: { type: String },
    lastName: { type: String },
    contactNumber: { type: String },
    email: {
      type: String,
      match: [
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email format",
      ],
    },
    certifications: {
      type: String,
      enum: ["None", "British Council Training"],
    },
    workingSince: {
      type: Number,
      min: [1900, "Year must be after 1900"],
      max: [2025, "Year cannot be in the future"],
    },
    // Company-specific fields
    companyName: { type: String },
    directorFirstName: { type: String },
    directorLastName: { type: String },
    directorContact: { type: String },
    directorEmail: {
      type: String,
      match: [
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email format",
      ],
    },
    companyEstablished: {
      type: Number,
      min: [1900, "Year must be after 1900"],
      max: [2025, "Year cannot be in the future"],
    },
    // Common fields
    postalAddress: {
      type: String,
      required: [true, "Postal address is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      enum: countriesAndMarkets,
    },
    state: { type: String },
    city: { type: String, required: [true, "City is required"] },
    students2026: {
      type: Number,
      min: 0,
      required: [true, "Students for 2026 is required"],
    },
    students2027: {
      type: Number,
      min: 0,
      required: [true, "Students for 2027 is required"],
    },
    targetMarket: {
      type: String,
      required: [true, "Target market is required"],
      enum: countriesAndMarkets,
    },
    destinationMarket: {
      type: String,
      required: [true, "Destination market is required"],
      enum: countriesAndMarkets,
    },
    students2024: {
      type: Number,
      min: 0,
      required: [true, "Students for 2024 is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Optional: Add pre-validate hook for conditional required fields
RecruitmentPartnerSchema.pre("validate", function (next) {
  if (this.partnerType === "individual") {
    if (!this.firstName)
      this.invalidate("firstName", "First name is required for individuals");
    if (!this.lastName)
      this.invalidate("lastName", "Last name is required for individuals");
    if (!this.contactNumber)
      this.invalidate(
        "contactNumber",
        "Contact number is required for individuals"
      );
    if (!this.email)
      this.invalidate("email", "Email is required for individuals");
    if (!this.workingSince)
      this.invalidate(
        "workingSince",
        "Working since year is required for individuals"
      );
    if (!this.state)
      this.invalidate("state", "State is required for individuals");
  } else if (this.partnerType === "company") {
    if (!this.companyName)
      this.invalidate("companyName", "Company name is required for companies");
    if (!this.directorFirstName)
      this.invalidate(
        "directorFirstName",
        "Director's first name is required for companies"
      );
    if (!this.directorLastName)
      this.invalidate(
        "directorLastName",
        "Director's last name is required for companies"
      );
    if (!this.directorContact)
      this.invalidate(
        "directorContact",
        "Director's contact is required for companies"
      );
    if (!this.directorEmail)
      this.invalidate(
        "directorEmail",
        "Director's email is required for companies"
      );
    if (!this.companyEstablished)
      this.invalidate(
        "companyEstablished",
        "Company established year is required for companies"
      );
  }
  next();
});

const RecruitmentPartner = model<IRecruitmentPartner>(
  "RecruitmentPartner",
  RecruitmentPartnerSchema
);

export default RecruitmentPartner;
