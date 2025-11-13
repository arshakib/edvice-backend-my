import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { BusinessVisaController } from "./businessvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/business-visas
 * @desc Create a new BusinessVisa submission
 * @access Public
 */
router.post("/", BusinessVisaController.createBusinessVisa);

/**
 * @route GET /api/v1/business-visas
 * @desc Get all BusinessVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  BusinessVisaController.getAllBusinessVisas
);

/**
 * @route GET /api/v1/business-visas/:id
 * @desc Get a single BusinessVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  BusinessVisaController.getBusinessVisaById
);

export const BusinessVisaRoutes = router;
