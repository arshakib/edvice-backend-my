import express from "express";

import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { BlogController } from "./blogs.controller";

const router = express.Router();

/**
 * @route POST /api/v1/blogs
 * @desc Create a new blog
 * @access Private (requires JWT, user or admin)
 */
router.post(
  "/",
//   auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  BlogController.createBlog
);

/**
 * @route GET /api/v1/blogs
 * @desc Get all blogs
 * @access Public
 */
router.get("/", BlogController.getAllBlogs);

/**
 * @route GET /api/v1/blogs/:id
 * @desc Get a single blog by ID
 * @access Public
 */
router.get("/:id", BlogController.getBlogById);





export const BlogRoutes = router;
