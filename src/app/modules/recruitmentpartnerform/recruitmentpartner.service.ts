import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import RecruitmentPartner from "./recruitmentpartner.model";
import { IRecruitmentPartner } from "./recruitmentpartner.interface";





interface RecruitmentPartnerInput {
  partnerType: "individual" | "company";
  // Individual-specific
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  email?: string;
  certifications?: "None" | "British Council Training";
  workingSince?: number;
  // Company-specific
  companyName?: string;
  directorFirstName?: string;
  directorLastName?: string;
  directorContact?: string;
  directorEmail?: string;
  companyEstablished?: number;
  // Common
  postalAddress: string;
  country: string;
  state?: string;
  city: string;
  students2026: number;
  students2027: number;
  targetMarket: string;
  destinationMarket: string;
  students2024: number;
}

export class RecruitmentPartnerService {
  /**
   * Create a new recruitment partner submission
   */
  static async createRecruitmentPartner(
    input: RecruitmentPartnerInput
  ): Promise<IRecruitmentPartner> {
    // Additional validation if needed, but schema handles most
    const recruitmentPartner = await RecruitmentPartner.create(input);
    return recruitmentPartner;
  }

  /**
   * Get all recruitment partner submissions
   */
  static async getAllRecruitmentPartners(): Promise<IRecruitmentPartner[]> {
    const recruitmentPartners = await RecruitmentPartner.find();
    return recruitmentPartners;
  }

  /**
   * Get a single recruitment partner submission by ID
   */
  static async getRecruitmentPartnerById(
    id: string
  ): Promise<IRecruitmentPartner> {
    const recruitmentPartner = await RecruitmentPartner.findById(id);
    if (!recruitmentPartner) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Recruitment partner submission not found"
      );
    }
    return recruitmentPartner;
  }
}
