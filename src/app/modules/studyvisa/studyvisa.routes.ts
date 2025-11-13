import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { StudyVisaController } from "./studyvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/study-visas
 * @desc Create a new StudyVisa submission
 * @access Public
 */
router.post("/", StudyVisaController.createStudyVisa);

/**
 * @route GET /api/v1/study-visas
 * @desc Get all StudyVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  StudyVisaController.getAllStudyVisas
);

/**
 * @route GET /api/v1/study-visas/:id
 * @desc Get a single StudyVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  StudyVisaController.getStudyVisaById
);

export const StudyVisaRoutes = router;
