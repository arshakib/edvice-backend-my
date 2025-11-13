export interface IAccommodation {
  fullName: string;
  email: string;
  contact: string;
  universityCity: string;
  moveInMonth: string;
  moveInYear: string;
  budget: "< £500" | "£500–£700" | "£700–£900" | "£900+";
  accommodationType: string[];
  dependents: "Yes" | "No";
}
