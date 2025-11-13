import httpStatus from "http-status";
import { IStudyVisa } from "./studyvisa.interfece";
import StudyVisa from "./studyvisa.model";
import ApiError from "../../../errors/Apierror";


interface StudyVisaInput {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  studentVisa: "Yes" | "No";
  studyLevel: "Undergraduate" | "Postgraduate" | "Other";
  otherStudyLevel?: string;
  unconditionalOffer: "Yes" | "No";
  startDate?: string;
  previousVisa: "Yes" | "No";
  dependents: "Yes" | "No";
  challenges?: string;
}

export class StudyVisaService {
  /**
   * Create a new StudyVisa submission
   */
  static async createStudyVisa(input: StudyVisaInput): Promise<IStudyVisa> {
    const studyVisa = await StudyVisa.create(input);
    return studyVisa;
  }

  /**
   * Get all StudyVisa submissions
   */
  static async getAllStudyVisas(): Promise<IStudyVisa[]> {
    const studyVisas = await StudyVisa.find();
    return studyVisas;
  }

  /**
   * Get a single StudyVisa submission by ID
   */
  static async getStudyVisaById(id: string): Promise<IStudyVisa> {
    const studyVisa = await StudyVisa.findById(id);
    if (!studyVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "StudyVisa submission not found"
      );
    }
    return studyVisa;
  }
}
