export interface IHomeStudentService {
  fullName: string;
  email: string;
  phone: string;
  levelOfStudy:
    | "Further Education"
    | "Undergraduate"
    | "Postgraduate"
    | "Other";
  otherLevelOfStudy?: string;
  supportNeeded: {
    universityAdvice: boolean;
    careerGuidance: boolean;
    personalStatementHelp: boolean;
    examPreparation: boolean;
  };
  otherSupport?: string;
  alreadyApplied: "Yes" | "No";
  studyStartPlan:
    | "Within 3 months"
    | "Within 6 months"
    | "Within a year"
    | "Not sure yet";
  currentlyStudying: "Yes" | "No";
  financePlan:
    | "Yes, I have applied or plan to apply"
    | "No, I do not plan to apply / I will fund my own studies"
    | "Not sure yet";
  qualificationsExperience?: string;
  additionalInfo?: string;
}
