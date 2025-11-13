export interface ISwitchExtensionVisa {
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
