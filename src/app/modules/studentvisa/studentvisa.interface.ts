export interface IStudentVisa {
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
