export interface IStudyVisa {
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
