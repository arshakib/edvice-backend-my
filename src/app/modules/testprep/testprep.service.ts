
import httpStatus from "http-status";
import ITestPrep from "./testprep.interface";
import TestPrep from "./testprep.model";
import ApiError from "../../../errors/Apierror";




interface TestPrepInput {
  fullName: string;
  email: string;
  phone: string;
  tests: {
    IELTS: boolean;
    SAT: boolean;
    LNAT: boolean;
    TOEFL: boolean;
  };
  otherTest?: string;
  targetTestDate?: string;
  notSureYet: boolean;
  takenBefore: "Yes" | "No";
  previousScore?: string;
  targetScore: string;
  lookingFor: {
    fullCourse: boolean;
    specificCoaching: boolean;
    practiceTests: boolean;
  };
  otherLookingFor?: string;
  coachingMode: "Online" | "In-person" | "Both";
  additionalInfo?: string;
}

export class TestPrepService {
  /**
   * Create a new TestPrep submission
   */
  static async createTestPrep(input: TestPrepInput): Promise<ITestPrep> {
    const testPrep = await TestPrep.create(input);
    return testPrep;
  }

  /**
   * Get all TestPrep submissions
   */
  static async getAllTestPreps(): Promise<ITestPrep[]> {
    const testPreps = await TestPrep.find();
    return testPreps;
  }

  /**
   * Get a single TestPrep submission by ID
   */
  static async getTestPrepById(id: string): Promise<ITestPrep> {
    const testPrep = await TestPrep.findById(id);
    if (!testPrep) {
      throw new ApiError(httpStatus.NOT_FOUND, "TestPrep submission not found");
    }
    return testPrep;
  }
}
