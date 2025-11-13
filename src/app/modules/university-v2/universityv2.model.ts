import { Schema, model } from "mongoose";
import {
  Asset,
  Program,
  DegreeGroup,
  Cost,
  PromoCard,
  SemesterItem,
  Semester,
  MinGrades,
  School,
  ElasticsearchDocument,
} from "./universityv2.interface";

const AssetSchema = new Schema<Asset>({
  metadata: {
    tags: [{ type: String }],
    concepts: [{ type: String }],
  },
  sys: {
    space: {
      sys: {
        type: { type: String, required: true },
        linkType: { type: String, required: true },
        id: { type: String, required: true },
      },
    },
    id: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
    environment: {
      sys: {
        id: { type: String, required: true },
        type: { type: String, required: true },
        linkType: { type: String, required: true },
      },
    },
    publishedVersion: { type: Number, required: true },
    revision: { type: Number, required: true },
    locale: { type: String, required: true },
  },
  fields: {
    title: { type: String, required: true },
    file: {
      url: { type: String, required: true },
      details: {
        size: { type: Number, required: true },
        image: {
          width: { type: Number, required: true },
          height: { type: Number, required: true },
        },
      },
      fileName: { type: String, required: true },
      contentType: { type: String, required: true },
    },
  },
});

const ProgramSchema = new Schema<Program>({
  name: { type: String, required: true },
  concentrations: [{ type: String }],
});

const DegreeGroupSchema = new Schema<DegreeGroup>({
  name: { type: String, required: true },
  programs: [ProgramSchema],
});

const CostSchema = new Schema<Cost>({
  total: { type: Number, required: true },
  tuition: { type: Number, required: true },
  housing: { type: Number, required: true },
  dining: { type: Number, required: true },
  other: { type: Number, required: true },
});

const PromoCardSchema = new Schema<PromoCard>({
  entryName: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  bulletpoint1: { type: String, required: true },
  bulletpointDetails1: { type: String, required: true },
  bulletpoint2: { type: String, required: true },
  bulletpointDetails2: { type: String, required: true },
  bulletpoint3: { type: String, required: true },
  bulletpointDetails3: { type: String, required: true },
  bulletpoint4: { type: String, required: true },
  bulletpointDetails4: { type: String, required: true },
  bulletpoint5: { type: String, required: true },
  bulletpointDetails5: { type: String, required: true },
  bulletpoint6: { type: String, required: true },
  bulletpointDetails6: { type: String, required: true },
  promoCardLink: [[{ type: String }]],
  openInNewWindow: { type: Boolean, required: true },
  hideOnStudentHub: { type: Boolean, required: true },
  hideOnAgentHub: { type: Boolean, required: true },
});

const SemesterItemSchema = new Schema<SemesterItem>({
  name: { type: String, required: true },
  date: { type: String, required: true },
});

const SemesterSchema = new Schema<Semester>({
  title: { type: String, required: true },
  items: [SemesterItemSchema],
});

const MinGradesSchema = new Schema<MinGrades>({
  GPA: { type: Number, required: true },
  IELTS: { type: Number, required: true },
  TOEFL: { type: Number, required: true },
});

const SchoolSchema = new Schema<School>({
  isSchool: { type: Boolean, required: true },
  name: { type: String, required: true, trim: true },
  fullName: { type: String, required: true, trim: true },
  slug: { type: String, required: true, trim: true },
  schoolLogo: { type: AssetSchema, required: true },
  schoolHighlightColor: { type: String, required: true },
  schoolSafeColor: { type: String, required: true },
  totalStudents: { type: String, required: true },
  totalStudentsCount: { type: Number, required: true },
  internationalStudents: { type: String, required: true },
  internationalStudentsPercentage: { type: Number, required: true },
  locationName: { type: String, required: true, trim: true },
  locationPopulation: { type: Number, required: true },
  locationMap: { type: AssetSchema, required: true },
  locationRegion: { type: String, required: true, trim: true },
  marketoAbbreviation: { type: String, required: true },
  nationalRanking: { type: Number, required: true },
  isSignatureSchool: { type: Boolean, required: true },
  undergraduateExist: { type: Boolean, required: true },
  undergraduateApplicationLink: { type: String, required: true },
  undergraduateRankings: [{ type: String }],
  undergraduateDegrees: [DegreeGroupSchema],
  undergraduateCost: { type: CostSchema, required: true },
  undergraduatePromoCard: { type: PromoCardSchema, required: true },
  undergraduateNearestSemesters: [SemesterSchema],
  undergraduateDescription: { type: String, required: true, trim: true },
  undergraduateCurrency: { type: String, required: true },
  undergraduateMinGrades: { type: MinGradesSchema, required: true },
  graduateExist: { type: Boolean, required: false },
  graduateApplicationLink: { type: String, required: false },
  graduateRankings: [{ type: String }],
  graduateDegrees: [DegreeGroupSchema],
  graduateCost: { type: CostSchema, required: false },
  graduatePromoCard: { type: PromoCardSchema, required: false },
  graduateNearestSemesters: [SemesterSchema],
  graduateDescription: { type: String, required: false, trim: true },
  graduateCurrency: { type: String, required: false },
  graduateMinGrades: { type: MinGradesSchema, required: false },
  englishExist: { type: Boolean, required: false },
  englishApplicationLink: { type: String, required: false },
  englishRankings: [{ type: String }],
  englishDegrees: [DegreeGroupSchema],
  englishCost: { type: CostSchema, required: false },
  englishPromoCard: { type: PromoCardSchema, required: false },
  englishNearestSemesters: [SemesterSchema],
  englishDescription: { type: String, required: false, trim: true },
  englishCurrency: { type: String, required: false },
  englishMinGrades: { type: MinGradesSchema, required: false },
});

const ElasticsearchDocumentSchema = new Schema<ElasticsearchDocument>({
  _index: { type: String, required: true },
  _type: { type: String, required: true },
  _id: { type: String, required: true },
  _score: { type: Number, required: false, default: null },
  _source: { type: SchoolSchema, required: true },
  sort: [{ type: Schema.Types.Mixed }],
});

const UniversityV2 = model<ElasticsearchDocument>(
  "UniversityV2",
  ElasticsearchDocumentSchema
);

export default UniversityV2;
