import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { FamilyVisaController } from "./familyvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/family-visas
 * @desc Create a new FamilyVisa submission
 * @access Public
 */
router.post("/", FamilyVisaController.createFamilyVisa);

/**
 * @route GET /api/v1/family-visas
 * @desc Get all FamilyVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  FamilyVisaController.getAllFamilyVisas
);

/**
 * @route GET /api/v1/family-visas/:id
 * @desc Get a single FamilyVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  FamilyVisaController.getFamilyVisaById
);

export const FamilyVisaRoutes = router;
