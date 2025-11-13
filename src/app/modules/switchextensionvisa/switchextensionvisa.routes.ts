import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { SwitchExtensionVisaController } from "./switchextensionvisa.controller";

const router = express.Router();

/**
 * @route POST /api/v1/switch-extension-visas
 * @desc Create a new SwitchExtensionVisa submission
 * @access Public
 */
router.post("/", SwitchExtensionVisaController.createSwitchExtensionVisa);

/**
 * @route GET /api/v1/switch-extension-visas
 * @desc Get all SwitchExtensionVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN),
  SwitchExtensionVisaController.getAllSwitchExtensionVisas
);

/**
 * @route GET /api/v1/switch-extension-visas/:id
 * @desc Get a single SwitchExtensionVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  SwitchExtensionVisaController.getSwitchExtensionVisaById
);

export const SwitchExtensionVisaRoutes = router;
