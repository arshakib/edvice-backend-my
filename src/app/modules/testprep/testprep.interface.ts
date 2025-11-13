interface ITestPrep {
  fullName: string;
  email: string;
  phone: string;
  tests: {
    IELTS: boolean;
    SAT: boolean;
    LNAT: boolean;
    TOEFL: boolean;
  };
  otherTest: string;
  targetTestDate: string;
  notSureYet: boolean;
  takenBefore: "Yes" | "No";
  previousScore: string;
  targetScore: string;
  lookingFor: {
    fullCourse: boolean;
    specificCoaching: boolean;
    practiceTests: boolean;
  };
  otherLookingFor: string;
  coachingMode: "Online" | "In-person" | "Both";
  additionalInfo: string;
}

export default ITestPrep;
