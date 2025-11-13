import express from "express";
import { BlogRoutes } from "../modules/blogs/blogs.routes";
import { UniversityRoutes } from "../modules/university/university.routes";
import { UniversityV2Routes } from "../modules/university-v2/universityv2.routes";
import { BookAppointmentRoutes } from "../modules/book-appoinment-form/book-appoinment.routes";
import { RecruitmentPartnerRoutes } from "../modules/recruitmentpartnerform/recruitmentpartner.routes";
import { TestPrepRoutes } from "../modules/testprep/testprep.routes";
import { StudyVisaRoutes } from "../modules/studyvisa/studyvisa.routes";
import { AccommodationRoutes } from "../modules/accommodation/accommodation.routes";
import { HomeStudentServiceRoutes } from "../modules/homestudentservice/homestudentservice.routes";
import { StudentVisaRoutes } from "../modules/studentvisa/studentvisa.routes";
import { BusinessVisaRoutes } from "../modules/businessvisa/businessvisa.routes";
import { VisitorVisaRoutes } from "../modules/visitorvisa/visitorvisa.routes";
import { FamilyVisaRoutes } from "../modules/familyvisa/familyvisa.routes";
import { SwitchExtensionVisaRoutes } from "../modules/switchextensionvisa/switchextensionvisa.routes";
import { ILRVisaRoutes } from "../modules/ILRVisa/ILRVisa.routes";

const router = express.Router();

// Define module routes for the LMS API
const moduleRoutes = [
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  // {
  //   path: "/universities",
  //   route: UniversityRoutes,
  // },
  {
    path: "/universities",
    route: UniversityV2Routes,
  },
  {
    path: "/book-appointment",
    route: BookAppointmentRoutes,
  },
  {
    path: "/recruitment-partners",
    route: RecruitmentPartnerRoutes,
  },
  {
    path: "/test-prep",
    route: TestPrepRoutes,
  },
  {
    path: "/study-visas",
    route: StudyVisaRoutes,
  },
  {
    path: "/accommodations",
    route: AccommodationRoutes,
  },
  {
    path: "/home-student-services",
    route: HomeStudentServiceRoutes,
  },
  {
    path: "/student-visas",
    route: StudentVisaRoutes,
  },
  {
    path: "/business-visas",
    route: BusinessVisaRoutes,
  },
  {
    path: "/visitor-visas",
    route: VisitorVisaRoutes,
  },
  {
    path: "/family-visas",
    route: FamilyVisaRoutes,
  },
  {
    path: "/switch-extension-visas",
    route: SwitchExtensionVisaRoutes,
  },
  {
    path: "/ilr-visas",
    route: ILRVisaRoutes,
  },
];

// Dynamically register module routes
moduleRoutes.forEach((route) => {
  try {
    router.use(route.path, route.route);
  } catch (error) {
    console.error(`Failed to load route ${route.path}:`, error);
  }
});

export default router;
