import httpStatus from "http-status";


import { ElasticsearchDocument } from "./universityv2.interface";
import ApiError from "../../../errors/Apierror";
import UniversityV2 from "./universityv2.model";

export class UniversityV2Service {
  /**
   * Create a new university
   */
  static async createUniversity(
    input: ElasticsearchDocument
  ): Promise<ElasticsearchDocument> {
    const university = await UniversityV2.create({ ...input });
    return university;
  }

  /**
   * Get all universities
   */
  static async getAllUniversities(): Promise<ElasticsearchDocument[]> {
    const universities = await UniversityV2.find();
    return universities;
  }

  /**
   * Get a single university by ID
   */
  static async getUniversityById(id: string): Promise<ElasticsearchDocument> {
    const university = await UniversityV2.findById(id);
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
    input: Partial<ElasticsearchDocument>,
    userId: string
  ): Promise<ElasticsearchDocument> {
    const university = await UniversityV2.findById(id);
    if (!university) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }

    // Optional: Add authorization check to ensure user can update this university
    // if (university.createdBy.toString() !== userId) {
    //   throw new ApiError(httpStatus.FORBIDDEN, "Not authorized to update this university");
    // }

    const updatedUniversity = await UniversityV2.findByIdAndUpdate(id, input, {
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
    const university = await UniversityV2.findById(id);
    if (!university) {
      throw new ApiError(httpStatus.NOT_FOUND, "University not found");
    }
    await UniversityV2.findByIdAndDelete(id);
  }
}
