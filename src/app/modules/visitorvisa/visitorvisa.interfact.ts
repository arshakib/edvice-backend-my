export interface IVisitorVisa {
  fullName: string;
  email: string;
  phone?: string;
  visitorVisaType: string;
  visitPurpose:
    | "tourism"
    | "study-short-courses"
    | "business"
    | "medical-treatment"
    | "permitted-paid-engagements"
    | "academic-doctor-dentist"
    | "other";
  visitPurposeOther?: string;
  validPassport: "yes" | "no";
  evidenceToLeave: "yes" | "no";
  financialSupport: "yes" | "no";
  longTermTravelRegularly?: "yes" | "no";
  longTermTravelProof?: "yes" | "no";
  longTermVisaDuration?: "2-years" | "5-years" | "10-years";
  description?: string;
}
