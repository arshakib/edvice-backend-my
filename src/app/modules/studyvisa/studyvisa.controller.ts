import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { StudyVisaService } from "./studyvisa.service";
import { IStudyVisa } from "./studyvisa.interfece";


export class StudyVisaController {
  static createStudyVisa = catchAsync(async (req: Request, res: Response) => {
    const studyVisaData = req.body;
    const studyVisa = await StudyVisaService.createStudyVisa(studyVisaData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: studyVisa,
      meta: {},
      message: "StudyVisa submission created successfully",
    } as IGenericResponse<IStudyVisa>);
  });

  static getAllStudyVisas = catchAsync(async (req: Request, res: Response) => {
    const studyVisas = await StudyVisaService.getAllStudyVisas();
    res.status(httpStatus.OK).json({
      success: true,
      data: studyVisas,
      meta: {},
    } as IGenericResponse<IStudyVisa[]>);
  });

  static getStudyVisaById = catchAsync(async (req: Request, res: Response) => {
    const studyVisa = await StudyVisaService.getStudyVisaById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: studyVisa,
      meta: {},
    } as IGenericResponse<IStudyVisa>);
  });
}
