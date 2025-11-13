import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import University from "./university.model";
import { IUniversity } from "./university.interface";

interface UniversityInput {
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

export class UniversityService {
  /**
   * Create a new university
   */
  static async createUniversity(input: UniversityInput): Promise<IUniversity> {
    const university = await University.create({ ...input });
    return university;
  }

  /**
   * Get all universities
   */
  static async getAllUniversities(): Promise<IUniversity[]> {
    const universities = await University.find();
    return universities;
  }

  /**
   * Get a single university by ID
   */
  static async getUniversityById(id: string): Promise<IUniversity> {
    const university = await University.findById(id);
    if (!university) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }
    return university;
  }

  /**
   * Update a university by ID
   */
  static async updateUniversity(
    id: string,
    input: Partial<UniversityInput>,
    userId: string
  ): Promise<IUniversity> {
    const university = await University.findById(id);
    if (!university) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }

    // Optional: Add authorization check to ensure user can update this university
    // if (university.createdBy.toString() !== userId) {
    //   throw new ApiError(httpStatus.FORBIDDEN, "Not authorized to update this university");
    // }

    const updatedUniversity = await University.findByIdAndUpdate(id, input, {
      new: true,
    });
    if (!updatedUniversity) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }
    return updatedUniversity;
  }

  /**
   * Delete a university by ID
   */
  static async deleteUniversity(id: string): Promise<void> {
    const university = await University.findById(id);
    if (!university) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }
    await University.findByIdAndDelete(id);
  }
}
