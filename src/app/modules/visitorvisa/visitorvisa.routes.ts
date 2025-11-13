import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { VisitorVisaController } from "./visitorvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/visitor-visas
 * @desc Create a new VisitorVisa submission
 * @access Public
 */
router.post("/", VisitorVisaController.createVisitorVisa);

/**
 * @route GET /api/v1/visitor-visas
 * @desc Get all VisitorVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  VisitorVisaController.getAllVisitorVisas
);

/**
 * @route GET /api/v1/visitor-visas/:id
 * @desc Get a single VisitorVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  VisitorVisaController.getVisitorVisaById
);

export const VisitorVisaRoutes = router;
