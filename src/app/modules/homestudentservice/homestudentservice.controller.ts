import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { HomeStudentServiceService } from "./homestudentservice.service";
import { IHomeStudentService } from "./homestudentservice.interface";


export class HomeStudentServiceController {
  static createHomeStudentService = catchAsync(
    async (req: Request, res: Response) => {
      const homeStudentServiceData = req.body;
      const homeStudentService =
        await HomeStudentServiceService.createHomeStudentService(
          homeStudentServiceData
        );
      res.status(httpStatus.CREATED).json({
        success: true,
        data: homeStudentService,
        meta: {},
        message: "HomeStudentService submission created successfully",
      } as IGenericResponse<IHomeStudentService>);
    }
  );

  static getAllHomeStudentServices = catchAsync(
    async (req: Request, res: Response) => {
      const homeStudentServices =
        await HomeStudentServiceService.getAllHomeStudentServices();
      res.status(httpStatus.OK).json({
        success: true,
        data: homeStudentServices,
        meta: {},
      } as IGenericResponse<IHomeStudentService[]>);
    }
  );

  static getHomeStudentServiceById = catchAsync(
    async (req: Request, res: Response) => {
      const homeStudentService =
        await HomeStudentServiceService.getHomeStudentServiceById(
          req.params.id
        );
      res.status(httpStatus.OK).json({
        success: true,
        data: homeStudentService,
        meta: {},
      } as IGenericResponse<IHomeStudentService>);
    }
  );
}
