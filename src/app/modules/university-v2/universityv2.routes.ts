import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { UniversityV2Controller } from "./universityv2.controller";

const router = express.Router();

/**
 * @route POST /api/v2/universities
 * @desc Create a new university record
 * @access Private (requires JWT, user or admin)
 */
router.post(
  "/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UniversityV2Controller.createUniversity
);

/**
 * @route GET /api/v2/universities
 * @desc Get all university records
 * @access Public
 */
router.get("/", UniversityV2Controller.getAllUniversities);

/**
 * @route GET /api/v2/universities/:id
 * @desc Get a single university record by ID
 * @access Public
 */
router.get("/:id", UniversityV2Controller.getUniversityById);

export const UniversityV2Routes = router;
