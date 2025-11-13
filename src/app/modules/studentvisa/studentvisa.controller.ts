import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { StudentVisaService } from "./studentvisa.service";
import { IStudentVisa } from "./studentvisa.interface";


export class StudentVisaController {
  static createStudentVisa = catchAsync(async (req: Request, res: Response) => {
    const studentVisaData = req.body;
    const studentVisa = await StudentVisaService.createStudentVisa(
      studentVisaData
    );
    res.status(httpStatus.CREATED).json({
      success: true,
      data: studentVisa,
      meta: {},
      message: "StudentVisa submission created successfully",
    } as IGenericResponse<IStudentVisa>);
  });

  static getAllStudentVisas = catchAsync(
    async (req: Request, res: Response) => {
      const studentVisas = await StudentVisaService.getAllStudentVisas();
      res.status(httpStatus.OK).json({
        success: true,
        data: studentVisas,
        meta: {},
      } as IGenericResponse<IStudentVisa[]>);
    }
  );

  static getStudentVisaById = catchAsync(
    async (req: Request, res: Response) => {
      const studentVisa = await StudentVisaService.getStudentVisaById(
        req.params.id
      );
      res.status(httpStatus.OK).json({
        success: true,
        data: studentVisa,
        meta: {},
      } as IGenericResponse<IStudentVisa>);
    }
  );
}
