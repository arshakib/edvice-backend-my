import httpStatus from "http-status";
import ILRVisa from "./ILRVisa.model";
import { IILRVisa } from "./ILRVisa.interface";
import ApiError from "../../../errors/Apierror";

interface ILRVisaInput {
  fullName: string;
  email: string;
  phone?: string;
  currentVisa:
    | "skilled-worker-visa"
    | "innovator-founder-visa"
    | "investor-visa"
    | "sole-representative-visa"
    | "turkish-worker-businessperson-visa"
    | "other";
  currentVisaOther?: string;
  ukResidenceDuration: "less-than-3-years" | "3-to-5-years" | "over-5-years";
  meetsVisaRequirements: "yes" | "not-sure" | "no";
  supportingDocuments: "most-all-documents" | "some-documents" | "not-yet";
  description?: string;
}

export class ILRVisaService {
  /**
   * Create a new ILRVisa submission
   */
  static async createILRVisa(input: ILRVisaInput): Promise<IILRVisa> {
    const ilrVisa = await ILRVisa.create(input);
    return ilrVisa;
  }

  /**
   * Get all ILRVisa submissions
   */
  static async getAllILRVisas(): Promise<IILRVisa[]> {
    const ilrVisas = await ILRVisa.find();
    return ilrVisas;
  }

  /**
   * Get a single ILRVisa submission by ID
   */
  static async getILRVisaById(id: string): Promise<IILRVisa> {
    const ilrVisa = await ILRVisa.findById(id);
    if (!ilrVisa) {
      throw new ApiError(httpStatus.NOT_FOUND, "ILRVisa submission not found");
    }
    return ilrVisa;
  }
}
