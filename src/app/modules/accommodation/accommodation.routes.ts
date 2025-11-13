import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { AccommodationController } from "./accommodation.controller";

const router = express.Router();

/**
 * @route POST /api/v1/accommodations
 * @desc Create a new Accommodation submission
 * @access Public
 */
router.post("/", AccommodationController.createAccommodation);

/**
 * @route GET /api/v1/accommodations
 * @desc Get all Accommodation submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  AccommodationController.getAllAccommodations
);

/**
 * @route GET /api/v1/accommodations/:id
 * @desc Get a single Accommodation submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  AccommodationController.getAccommodationById
);

export const AccommodationRoutes = router;
