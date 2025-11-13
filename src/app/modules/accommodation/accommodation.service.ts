import httpStatus from "http-status";
import { IAccommodation } from "./accommodation.interface";
import Accommodation from "./accommodation.model";
import ApiError from "../../../errors/Apierror";


interface AccommodationInput {
  fullName: string;
  email: string;
  contact: string;
  universityCity: string;
  moveInMonth: string;
  moveInYear: string;
  budget: "< £500" | "£500–£700" | "£700–£900" | "£900+";
  accommodationType: string[];
  dependents: "Yes" | "No";
}

export class AccommodationService {
  /**
   * Create a new Accommodation submission
   */
  static async createAccommodation(
    input: AccommodationInput
  ): Promise<IAccommodation> {
    const accommodation = await Accommodation.create(input);
    return accommodation;
  }

  /**
   * Get all Accommodation submissions
   */
  static async getAllAccommodations(): Promise<IAccommodation[]> {
    const accommodations = await Accommodation.find();
    return accommodations;
  }

  /**
   * Get a single Accommodation submission by ID
   */
  static async getAccommodationById(id: string): Promise<IAccommodation> {
    const accommodation = await Accommodation.findById(id);
    if (!accommodation) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Accommodation submission not found"
      );
    }
    return accommodation;
  }
}
