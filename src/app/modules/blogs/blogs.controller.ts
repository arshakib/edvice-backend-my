import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { BlogService } from "./blogs.service";
import { IBlog } from "./blog.interface";


export class BlogController {
  static createBlog = catchAsync(async (req: Request, res: Response) => {
    const blogData = req.body;
    const blog = await BlogService.createBlog(blogData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: blog,
      meta: {},
      message: "Blog created successfully",
    } as IGenericResponse<IBlog>);
  });

  static getAllBlogs = catchAsync(async (req: Request, res: Response) => {
    const blogs = await BlogService.getAllBlogs();
    res.status(httpStatus.OK).json({
      success: true,
      data: blogs,
      meta: {},
    } as IGenericResponse<IBlog[]>);
  });

  static getBlogById = catchAsync(async (req: Request, res: Response) => {
    const blog = await BlogService.getBlogById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: blog,
      meta: {},
    } as IGenericResponse<IBlog>);
  });

//   static updateBlog = catchAsync(async (req: Request, res: Response) => {
//     const blog = await BlogService.updateBlog(
//       req.params.id,
//       req.body,
//       req.user?.id
//     );
//     res.status(httpStatus.OK).json({
//       success: true,
//       data: blog,
//       meta: {},
//       message: "Blog updated successfully",
//     } as IGenericResponse<IBlog>);
//   });

  static deleteBlog = catchAsync(async (req: Request, res: Response) => {
    await BlogService.deleteBlog(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: null,
      meta: {},
      message: "Blog deleted successfully",
    } as IGenericResponse<null>);
  });
}
