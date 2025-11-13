import { Document } from "mongoose";

export interface IUniversity extends Document {
  name: string;
  ranking: string;
  location: string;
  tuition: string;
  locationType: string;
  enrollment: string;
  region: string | null;
  image: string;
  programTypes: string[];
}
