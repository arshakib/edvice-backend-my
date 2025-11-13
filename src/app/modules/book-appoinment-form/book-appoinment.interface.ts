import { Document, Types } from "mongoose";

export interface IBookAppointment extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  nationality: string;
  studyLocation: string;
  yearsOfStudy: string;
  typeOfStudy: string;
  preferredSubjects?: string[];
  referralSource: string;
  livingInUK: string;
  createdAt: Date;
}
