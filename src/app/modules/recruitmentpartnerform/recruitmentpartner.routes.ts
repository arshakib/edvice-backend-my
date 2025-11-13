import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { RecruitmentPartnerController } from "./recruitmentpartner.controller";


const router = express.Router();

/**
 * @route POST /api/v1/recruitment-partners
 * @desc Create a new recruitment partner submission
 * @access Public
 */
router.post(
  "/",
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN), // Uncomment if authentication is needed
  RecruitmentPartnerController.createRecruitmentPartner
);

/**
 * @route GET /api/v1/recruitment-partners
 * @desc Get all recruitment partner submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  RecruitmentPartnerController.getAllRecruitmentPartners
);

/**
 * @route GET /api/v1/recruitment-partners/:id
 * @desc Get a single recruitment partner submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  RecruitmentPartnerController.getRecruitmentPartnerById
);

export const RecruitmentPartnerRoutes = router;
