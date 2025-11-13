import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { StudentVisaController } from "./studentvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/student-visas
 * @desc Create a new StudentVisa submission
 * @access Public
 */
router.post("/", StudentVisaController.createStudentVisa);

/**
 * @route GET /api/v1/student-visas
 * @desc Get all StudentVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  StudentVisaController.getAllStudentVisas
);

/**
 * @route GET /api/v1/student-visas/:id
 * @desc Get a single StudentVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  StudentVisaController.getStudentVisaById
);

export const StudentVisaRoutes = router;
