import httpStatus from "http-status";

import StudentVisa from "./studentvisa.model";
import { IStudentVisa } from "./studentvisa.interface";
import ApiError from "../../../errors/Apierror";


interface StudentVisaInput {
  fullName: string;
  email: string;
  phone: string;
  applyingFor: "student-visa" | "work-visa" | "tourist-visa" | "business-visa";
  hasOffer: "yes" | "no" | "pending";
  selfFunding: "yes" | "no" | "partial" | "scholarship";
  documents:
    | "passport"
    | "academic-transcripts"
    | "financial-documents"
    | "language-test"
    | "all"
    | "none";
  description?: string;
}

export class StudentVisaService {
  /**
   * Create a new StudentVisa submission
   */
  static async createStudentVisa(
    input: StudentVisaInput
  ): Promise<IStudentVisa> {
    const studentVisa = await StudentVisa.create(input);
    return studentVisa;
  }

  /**
   * Get all StudentVisa submissions
   */
  static async getAllStudentVisas(): Promise<IStudentVisa[]> {
    const studentVisas = await StudentVisa.find();
    return studentVisas;
  }

  /**
   * Get a single StudentVisa submission by ID
   */
  static async getStudentVisaById(id: string): Promise<IStudentVisa> {
    const studentVisa = await StudentVisa.findById(id);
    if (!studentVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "StudentVisa submission not found"
      );
    }
    return studentVisa;
  }
}
