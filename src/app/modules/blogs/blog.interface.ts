import { Document, Types } from "mongoose";

export interface IBlog {
  _id: Types.ObjectId;
  title: string;
  image: string;
  description: string;
  category: string;
}
