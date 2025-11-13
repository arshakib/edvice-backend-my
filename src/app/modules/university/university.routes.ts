import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { UniversityController } from "./university.controller";


const router = express.Router();

/**
 * @route POST /api/v1/universities
 * @desc Create a new university
 * @access Private (requires JWT, user or admin)
 */
router.post(
  "/",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UniversityController.createUniversity
);

/**
 * @route GET /api/v1/universities
 * @desc Get all universities
 * @access Public
 */
router.get("/", UniversityController.getAllUniversities);

/**
 * @route GET /api/v1/universities/:id
 * @desc Get a single university by ID
 * @access Public
 */
router.get("/:id", UniversityController.getUniversityById);

export const UniversityRoutes = router;
