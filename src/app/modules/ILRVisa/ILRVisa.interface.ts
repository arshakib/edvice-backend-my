export interface IILRVisa {
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
