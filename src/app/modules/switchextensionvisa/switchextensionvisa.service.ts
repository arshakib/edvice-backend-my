import httpStatus from "http-status";

import SwitchExtensionVisa from "./switchextensionvisa.model";
import { ISwitchExtensionVisa } from "./switchextensionvisa.interface";
import ApiError from "../../../errors/Apierror";

interface SwitchExtensionVisaInput {
  fullName: string;
  email: string;
  phone?: string;
  currentVisaType:
    | "graduate-visa"
    | "student-visa"
    | "skilled-worker-visa"
    | "other";
  currentVisaTypeOther?: string;
  visaPlan:
    | "student-visa"
    | "skilled-worker-visa"
    | "ilr"
    | "extend-student-visa"
    | "extend-skilled-worker-visa"
    | "not-sure";
  visaExpiryDate: string;
  supportingDocuments: "most-all-documents" | "some-documents" | "not-yet";
  description?: string;
}

export class SwitchExtensionVisaService {
  /**
   * Create a new SwitchExtensionVisa submission
   */
  static async createSwitchExtensionVisa(
    input: SwitchExtensionVisaInput
  ): Promise<ISwitchExtensionVisa> {
    const switchExtensionVisa = await SwitchExtensionVisa.create(input);
    return switchExtensionVisa;
  }

  /**
   * Get all SwitchExtensionVisa submissions
   */
  static async getAllSwitchExtensionVisas(): Promise<ISwitchExtensionVisa[]> {
    const switchExtensionVisas = await SwitchExtensionVisa.find();
    return switchExtensionVisas;
  }

  /**
   * Get a single SwitchExtensionVisa submission by ID
   */
  static async getSwitchExtensionVisaById(
    id: string
  ): Promise<ISwitchExtensionVisa> {
    const switchExtensionVisa = await SwitchExtensionVisa.findById(id);
    if (!switchExtensionVisa) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "SwitchExtensionVisa submission not found"
      );
    }
    return switchExtensionVisa;
  }
}
