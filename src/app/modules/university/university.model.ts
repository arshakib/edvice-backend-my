import { Schema, model } from "mongoose";
import { IUniversity } from "./university.interface";

const UniversitySchema = new Schema<IUniversity>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ranking: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    tuition: {
      type: String,
      required: true,
      trim: true,
    },
    locationType: {
      type: String,
      required: true,
      trim: true,
    },
    enrollment: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    programTypes: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const University = model<IUniversity>("University", UniversitySchema);

export default University;
