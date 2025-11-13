import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { VisitorVisaService } from "./visitorvisa.service";
import { IVisitorVisa } from "./visitorvisa.interfact";


export class VisitorVisaController {
  static createVisitorVisa = catchAsync(async (req: Request, res: Response) => {
    const visitorVisaData = req.body;
    const visitorVisa = await VisitorVisaService.createVisitorVisa(
      visitorVisaData
    );
    res.status(httpStatus.CREATED).json({
      success: true,
      data: visitorVisa,
      meta: {},
      message: "VisitorVisa submission created successfully",
    } as IGenericResponse<IVisitorVisa>);
  });

  static getAllVisitorVisas = catchAsync(
    async (req: Request, res: Response) => {
      const visitorVisas = await VisitorVisaService.getAllVisitorVisas();
      res.status(httpStatus.OK).json({
        success: true,
        data: visitorVisas,
        meta: {},
      } as IGenericResponse<IVisitorVisa[]>);
    }
  );

  static getVisitorVisaById = catchAsync(
    async (req: Request, res: Response) => {
      const visitorVisa = await VisitorVisaService.getVisitorVisaById(
        req.params.id
      );
      res.status(httpStatus.OK).json({
        success: true,
        data: visitorVisa,
        meta: {},
      } as IGenericResponse<IVisitorVisa>);
    }
  );
}
