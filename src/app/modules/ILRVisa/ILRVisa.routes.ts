import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { ILRVisaController } from "./ILRVisa.controller";


const router = express.Router();

/**
 * @route POST /api/v1/ilr-visas
 * @desc Create a new ILRVisa submission
 * @access Public
 */
router.post("/", ILRVisaController.createILRVisa);

/**
 * @route GET /api/v1/ilr-visas
 * @desc Get all ILRVisa submissions
 * @access Private (requires JWT, admin only)
 */
router.get("/", auth(ENUM_USER_ROLE.ADMIN), ILRVisaController.getAllILRVisas);

/**
 * @route GET /api/v1/ilr-visas/:id
 * @desc Get a single ILRVisa submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  ILRVisaController.getILRVisaById
);

export const ILRVisaRoutes = router;
