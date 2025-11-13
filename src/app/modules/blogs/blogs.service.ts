import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import Blog from "./blogs.model";
import { IBlog } from "./blog.interface";


interface BlogInput {
  title: string;
  image: string;
  description: string;
}

export class BlogService {
  /**
   * Create a new blog
   */
  static async createBlog(input: BlogInput): Promise<IBlog> {
    const blog = await Blog.create({ ...input});
    return blog;
  }

  /**
   * Get all blogs
   */
  static async getAllBlogs(): Promise<IBlog[]> {
    const blogs = await Blog.find();
    return blogs;
  }

  /**
   * Get a single blog by ID
   */
  static async getBlogById(id: string): Promise<IBlog> {
    const blog = await Blog.findById(id);
    if (!blog) {
      throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
    }
    return blog;
  }

  /**
   * Update a blog by ID
   */
  static async updateBlog(
    id: string,
    input: Partial<BlogInput>,
    userId: string
  ): Promise<IBlog> {
    const blog = await Blog.findById(id);
    if (!blog) {
      throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
    }

    // Optional: Add authorization check to ensure user can update this blog
    // if (blog.createdBy.toString() !== userId) {
    //   throw new ApiError(httpStatus.FORBIDDEN, "Not authorized to update this blog");
    // }

    const updatedBlog = await Blog.findByIdAndUpdate(id, input, { new: true });
    if (!updatedBlog) {
      throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
    }
    return updatedBlog;
  }

  /**
   * Delete a blog by ID
   */
  static async deleteBlog(id: string): Promise<void> {
    const blog = await Blog.findById(id);
    if (!blog) {
      throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
    }
    await Blog.findByIdAndDelete(id);
  }
}
