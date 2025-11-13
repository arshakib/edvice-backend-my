export interface IFamilyVisa {
  fullName: string;
  email: string;
  nationality: string;
  currentLocation: "united-kingdom" | "outside-united-kingdom";
  familyMember:
    | "spouse-civil-partner"
    | "fiancee-proposed-civil-partner"
    | "child"
    | "parent"
    | "other";
  familyMemberOther?: string;
  immigrationStatus:
    | "british-citizen"
    | "settled-ilr"
    | "refugee-humanitarian"
    | "other";
  immigrationStatusOther?: string;
  currentVisaStatus?: string;
  description?: string;
}
