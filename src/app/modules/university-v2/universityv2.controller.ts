import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { ElasticsearchDocument } from "./universityv2.interface";
import { UniversityV2Service } from "./universityv2.service";

export class UniversityV2Controller {
  static createUniversity = catchAsync(async (req: Request, res: Response) => {
    const universityData = req.body;
    const university = await UniversityV2Service.createUniversity(
      universityData
    );
    res.status(httpStatus.CREATED).json({
      success: true,
      data: university,
      meta: {},
      message: "University created successfully",
    } as IGenericResponse<ElasticsearchDocument>);
  });

  static getAllUniversities = catchAsync(
    async (req: Request, res: Response) => {
      const universities = await UniversityV2Service.getAllUniversities();
      res.status(httpStatus.OK).json({
        success: true,
        data: universities,
        meta: {},
      } as IGenericResponse<ElasticsearchDocument[]>);
    }
  );

  static getUniversityById = catchAsync(async (req: Request, res: Response) => {
    const university = await UniversityV2Service.getUniversityById(
      req.params.id
    );
    res.status(httpStatus.OK).json({
      success: true,
      data: university,
      meta: {},
    } as IGenericResponse<ElasticsearchDocument>);
  });

  // static updateUniversity = catchAsync(async (req: Request, res: Response) => {
  //   const university = await UniversityV2Service.updateUniversity(
  //     req.params.id,
  //     req.body,
  //     req.user?.id
  //   );
  //   res.status(httpStatus.OK).json({
  //     success: true,
  //     data: university,
  //     meta: {},
  //     message: "University updated successfully",
  //   } as IGenericResponse<ElasticsearchDocument>);
  // });

  static deleteUniversity = catchAsync(async (req: Request, res: Response) => {
    await UniversityV2Service.deleteUniversity(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: null,
      meta: {},
      message: "University deleted successfully",
    } as IGenericResponse<null>);
  });
}
