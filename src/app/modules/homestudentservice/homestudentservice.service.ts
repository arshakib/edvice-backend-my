import httpStatus from "http-status";

import HomeStudentService from "./homestudentservice.model";
import { IHomeStudentService } from "./homestudentservice.interface";
import ApiError from "../../../errors/Apierror";


interface HomeStudentServiceInput {
  fullName: string;
  email: string;
  phone: string;
  levelOfStudy:
    | "Further Education"
    | "Undergraduate"
    | "Postgraduate"
    | "Other";
  otherLevelOfStudy?: string;
  supportNeeded: {
    universityAdvice: boolean;
    careerGuidance: boolean;
    personalStatementHelp: boolean;
    examPreparation: boolean;
  };
  otherSupport?: string;
  alreadyApplied: "Yes" | "No";
  studyStartPlan:
    | "Within 3 months"
    | "Within 6 months"
    | "Within a year"
    | "Not sure yet";
  currentlyStudying: "Yes" | "No";
  financePlan:
    | "Yes, I have applied or plan to apply"
    | "No, I do not plan to apply / I will fund my own studies"
    | "Not sure yet";
  qualificationsExperience?: string;
  additionalInfo?: string;
}

export class HomeStudentServiceService {
  /**
   * Create a new HomeStudentService submission
   */
  static async createHomeStudentService(
    input: HomeStudentServiceInput
  ): Promise<IHomeStudentService> {
    const homeStudentService = await HomeStudentService.create(input);
    return homeStudentService;
  }

  /**
   * Get all HomeStudentService submissions
   */
  static async getAllHomeStudentServices(): Promise<IHomeStudentService[]> {
    const homeStudentServices = await HomeStudentService.find();
    return homeStudentServices;
  }

  /**
   * Get a single HomeStudentService submission by ID
   */
  static async getHomeStudentServiceById(
    id: string
  ): Promise<IHomeStudentService> {
    const homeStudentService = await HomeStudentService.findById(id);
    if (!homeStudentService) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "HomeStudentService submission not found"
      );
    }
    return homeStudentService;
  }
}
