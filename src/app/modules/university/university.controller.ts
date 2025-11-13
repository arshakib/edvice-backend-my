import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { UniversityService } from "./university.service";
import { IUniversity } from "./university.interface";

export class UniversityController {
  static createUniversity = catchAsync(async (req: Request, res: Response) => {
    const universityData = req.body;
    const university = await UniversityService.createUniversity(universityData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: university,
      meta: {},
      message: "University created successfully",
    } as IGenericResponse<IUniversity>);
  });

  static getAllUniversities = catchAsync(
    async (req: Request, res: Response) => {
      const universities = await UniversityService.getAllUniversities();
      res.status(httpStatus.OK).json({
        success: true,
        data: universities,
        meta: {},
      } as IGenericResponse<IUniversity[]>);
    }
  );

  static getUniversityById = catchAsync(async (req: Request, res: Response) => {
    const university = await UniversityService.getUniversityById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: university,
      meta: {},
    } as IGenericResponse<IUniversity>);
  });

  // static updateUniversity = catchAsync(async (req: Request, res: Response) => {
  //   const university = await UniversityService.updateUniversity(
  //     req.params.id,
  //     req.body,
  //     req.user?.id
  //   );
  //   res.status(httpStatus.OK).json({
  //     success: true,
  //     data: university,
  //     meta: {},
  //     message: "University updated successfully",
  //   } as IGenericResponse<IUniversity>);
  // });

  static deleteUniversity = catchAsync(async (req: Request, res: Response) => {
    await UniversityService.deleteUniversity(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: null,
      meta: {},
      message: "University deleted successfully",
    } as IGenericResponse<null>);
  });
}
