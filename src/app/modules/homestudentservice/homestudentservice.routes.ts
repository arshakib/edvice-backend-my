import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { HomeStudentServiceController } from "./homestudentservice.controller";

const router = express.Router();

/**
 * @route POST /api/v1/home-student-services
 * @desc Create a new HomeStudentService submission
 * @access Public
 */
router.post("/", HomeStudentServiceController.createHomeStudentService);

/**
 * @route GET /api/v1/home-student-services
 * @desc Get all HomeStudentService submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  HomeStudentServiceController.getAllHomeStudentServices
);

/**
 * @route GET /api/v1/home-student-services/:id
 * @desc Get a single HomeStudentService submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  HomeStudentServiceController.getHomeStudentServiceById
);

export const HomeStudentServiceRoutes = router;
