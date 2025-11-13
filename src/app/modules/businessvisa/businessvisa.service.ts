import httpStatus from "http-status";

import BusinessVisa from "./businessvisa.model";
import { IBusinessVisa } from "./businessvisa.interface";
import ApiError from "../../../errors/Apierror";

interface BusinessVisaInput {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded:
    | "tier1-entrepreneur"
    | "tier1-investor"
    | "tier1-graduate-entrepreneur"
    | "innovator-founder"
    | "start-up"
    | "global-talent"
    | "ilr";
  visaExpiryDate?: string;
  meetsTier1Requirements: "yes" | "no" | "unsure";
  innovatorFounder?:
    | "have-endorsement"
    | "need-endorsement"
    | "business-plan"
    | "not-applicable";
  description?: string;
}

export class BusinessVisaService {
  /**
   * Create a new BusinessVisa submission
   */
  static async createBusinessVisa(
    input: BusinessVisaInput
  ): Promise<IBusinessVisa> {
    const businessVisa = await BusinessVisa.create(input);
    return businessVisa;
  }

  /**
   * Get all BusinessVisa submissions
   */
  static async getAllBusinessVisas(): Promise<IBusinessVisa[]> {
    const businessVisas = await BusinessVisa.find();
    return businessVisas;
  }

  /**
   * Get a single BusinessVisa submission by ID
   */
  static async getBusinessVisaById(id: string): Promise<IBusinessVisa> {
    const businessVisa = await BusinessVisa.findById(id);
    if (!businessVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "BusinessVisa submission not found"
      );
    }
    return businessVisa;
  }
}
