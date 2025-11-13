export interface Asset {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: number;
    revision: number;
    locale: string;
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface Program {
  name: string;
  concentrations: string[];
}

export interface DegreeGroup {
  name: string;
  programs: Program[];
}

export interface Cost {
  total: number;
  tuition: number;
  housing: number;
  dining: number;
  other: number;
}

export interface PromoCard {
  entryName: string;
  title: string;
  subtitle: string;
  bulletpoint1: string;
  bulletpointDetails1: string;
  bulletpoint2: string;
  bulletpointDetails2: string;
  bulletpoint3: string;
  bulletpointDetails3: string;
  bulletpoint4: string;
  bulletpointDetails4: string;
  bulletpoint5: string;
  bulletpointDetails5: string;
  bulletpoint6: string;
  bulletpointDetails6: string;
  promoCardLink: [string, string][];
  openInNewWindow: boolean;
  hideOnStudentHub: boolean;
  hideOnAgentHub: boolean;
}

export interface SemesterItem {
  name: string;
  date: string;
}

export interface Semester {
  title: string;
  items: SemesterItem[];
}

export interface MinGrades {
  GPA: number;
  IELTS: number;
  TOEFL: number;
}

export interface School {
  isSchool: boolean;
  name: string;
  fullName: string;
  slug: string;
  schoolLogo: Asset;
  schoolHighlightColor: string;
  schoolSafeColor: string;
  totalStudents: string;
  totalStudentsCount: number;
  internationalStudents: string;
  internationalStudentsPercentage: number;
  locationName: string;
  locationPopulation: number;
  locationMap: Asset;
  locationRegion: string;
  marketoAbbreviation: string;
  nationalRanking: number;
  isSignatureSchool: boolean;
  undergraduateExist: boolean;
  undergraduateApplicationLink: string;
  undergraduateRankings: string[];
  undergraduateDegrees: DegreeGroup[];
  undergraduateCost: Cost;
  undergraduatePromoCard: PromoCard;
  undergraduateNearestSemesters: Semester[];
  undergraduateDescription: string;
  undergraduateCurrency: string;
  undergraduateMinGrades: MinGrades;
  graduateExist?: boolean;
  graduateApplicationLink?: string;
  graduateRankings?: string[];
  graduateDegrees?: DegreeGroup[];
  graduateCost?: Cost;
  graduatePromoCard?: PromoCard;
  graduateNearestSemesters?: Semester[];
  graduateDescription?: string;
  graduateCurrency?: string;
  graduateMinGrades?: MinGrades;
  englishExist?: boolean;
  englishApplicationLink?: string;
  englishRankings?: string[];
  englishDegrees?: DegreeGroup[];
  englishCost?: Cost;
  englishPromoCard?: PromoCard;
  englishNearestSemesters?: Semester[];
  englishDescription?: string;
  englishCurrency?: string;
  englishMinGrades?: MinGrades;
}

export interface ElasticsearchDocument {
  _index: string;
  _type: string;
  _id: string;
  _score: number | null;
  _source: School;
  sort: (number | string)[];
}
