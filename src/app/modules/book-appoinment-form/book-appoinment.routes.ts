import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { BookAppointmentController } from "./book-appoinment.controller";

const router = express.Router();

/**
 * @route POST /api/v1/book-appointment
 * @desc Create a new book appointment form submission
 * @access Public
 */
router.post("/", BookAppointmentController.createBookAppointment);

/**
 * @route GET /api/v1/book-appointment
 * @desc Get all book appointment form submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  BookAppointmentController.getAllBookAppointments
);

/**
 * @route GET /api/v1/book-appointment/:id
 * @desc Get a single book appointment submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  BookAppointmentController.getBookAppointmentById
);

export const BookAppointmentRoutes = router;
