import { Document, Types } from "mongoose";

export interface IRecruitmentPartner extends Document {
  _id: Types.ObjectId;
  partnerType: "individual" | "company";
  // Individual-specific fields
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  email?: string;
  certifications?: "None" | "British Council Training";
  workingSince?: number;
  // Company-specific fields
  companyName?: string;
  directorFirstName?: string;
  directorLastName?: string;
  directorContact?: string;
  directorEmail?: string;
  companyEstablished?: number;
  // Common fields
  postalAddress: string;
  country: string;
  state?: string; // Only for individual
  city: string;
  students2026: number;
  students2027: number;
  targetMarket: string;
  destinationMarket: string;
  students2024: number;
  createdAt: Date;
}
