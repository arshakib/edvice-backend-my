export interface IBusinessVisa {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded:
    | "tier1-entrepreneur"
    | "tier1-investor"
    | "tier1-graduate-entrepreneur"
    | "innovator-founder"
    | "start-up"
    | "global-talent"
    | "ilr";
  visaExpiryDate?: string;
  meetsTier1Requirements: "yes" | "no" | "unsure";
  innovatorFounder?:
    | "have-endorsement"
    | "need-endorsement"
    | "business-plan"
    | "not-applicable";
  description?: string;
}
