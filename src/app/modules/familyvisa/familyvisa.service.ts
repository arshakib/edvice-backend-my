import httpStatus from "http-status";

import FamilyVisa from "./familyvisa.model";
import { IFamilyVisa } from "./familyvisa.interface";
import ApiError from "../../../errors/Apierror";


interface FamilyVisaInput {
  fullName: string;
  email: string;
  nationality: string;
  currentLocation: "united-kingdom" | "outside-united-kingdom";
  familyMember:
    | "spouse-civil-partner"
    | "fiancee-proposed-civil-partner"
    | "child"
    | "parent"
    | "other";
  familyMemberOther?: string;
  immigrationStatus:
    | "british-citizen"
    | "settled-ilr"
    | "refugee-humanitarian"
    | "other";
  immigrationStatusOther?: string;
  currentVisaStatus?: string;
  description?: string;
}

export class FamilyVisaService {
  /**
   * Create a new FamilyVisa submission
   */
  static async createFamilyVisa(input: FamilyVisaInput): Promise<IFamilyVisa> {
    const familyVisa = await FamilyVisa.create(input);
    return familyVisa;
  }

  /**
   * Get all FamilyVisa submissions
   */
  static async getAllFamilyVisas(): Promise<IFamilyVisa[]> {
    const familyVisas = await FamilyVisa.find();
    return familyVisas;
  }

  /**
   * Get a single FamilyVisa submission by ID
   */
  static async getFamilyVisaById(id: string): Promise<IFamilyVisa> {
    const familyVisa = await FamilyVisa.findById(id);
    if (!familyVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "FamilyVisa submission not found"
      );
    }
    return familyVisa;
  }
}
