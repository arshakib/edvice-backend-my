
import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { TestPrepController } from "./testprep.controller";

const router = express.Router();

/**
 * @route POST /api/v1/test-preps
 * @desc Create a new TestPrep submission
 * @access Public
 */
router.post("/", TestPrepController.createTestPrep);

/**
 * @route GET /api/v1/test-preps
 * @desc Get all TestPrep submissions
 * @access Private (requires JWT, admin only)
 */
router.get("/", auth(ENUM_USER_ROLE.ADMIN), TestPrepController.getAllTestPreps);

/**
 * @route GET /api/v1/test-preps/:id
 * @desc Get a single TestPrep submission by ID
 * @access Private (requires JWT, admin only)
 */
router.get(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  TestPrepController.getTestPrepById
);

export const TestPrepRoutes = router;
