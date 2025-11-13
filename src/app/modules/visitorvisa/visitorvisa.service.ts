import httpStatus from "http-status";

import VisitorVisa from "./visitorvisa.model";
import { IVisitorVisa } from "./visitorvisa.interfact";
import ApiError from "../../../errors/Apierror";


interface VisitorVisaInput {
  fullName: string;
  email: string;
  phone?: string;
  visitorVisaType: "standard-visitor" | "long-term-standard-visitor";
  visitPurpose:
    | "tourism"
    | "study-short-courses"
    | "business"
    | "medical-treatment"
    | "permitted-paid-engagements"
    | "academic-doctor-dentist"
    | "other";
  visitPurposeOther?: string;
  validPassport: "yes" | "no";
  evidenceToLeave: "yes" | "no";
  financialSupport: "yes" | "no";
  longTermTravelRegularly?: "yes" | "no";
  longTermTravelProof?: "yes" | "no";
  longTermVisaDuration?: "2-years" | "5-years" | "10-years";
  description?: string;
}

export class VisitorVisaService {
  /**
   * Create a new VisitorVisa submission
   */
  static async createVisitorVisa(
    input: VisitorVisaInput
  ): Promise<IVisitorVisa> {
    const visitorVisa = await VisitorVisa.create(input);
    return visitorVisa;
  }

  /**
   * Get all VisitorVisa submissions
   */
  static async getAllVisitorVisas(): Promise<IVisitorVisa[]> {
    const visitorVisas = await VisitorVisa.find();
    return visitorVisas;
  }

  /**
   * Get a single VisitorVisa submission by ID
   */
  static async getVisitorVisaById(id: string): Promise<IVisitorVisa> {
    const visitorVisa = await VisitorVisa.findById(id);
    if (!visitorVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "VisitorVisa submission not found"
      );
    }
    return visitorVisa;
  }
}
