import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { BusinessVisaService } from "./businessvisa.service";
import { IBusinessVisa } from "./businessvisa.interface";


export class BusinessVisaController {
  static createBusinessVisa = catchAsync(
    async (req: Request, res: Response) => {
      const businessVisaData = req.body;
      const businessVisa = await BusinessVisaService.createBusinessVisa(
        businessVisaData
      );
      res.status(httpStatus.CREATED).json({
        success: true,
        data: businessVisa,
        meta: {},
        message: "BusinessVisa submission created successfully",
      } as IGenericResponse<IBusinessVisa>);
    }
  );

  static getAllBusinessVisas = catchAsync(
    async (req: Request, res: Response) => {
      const businessVisas = await BusinessVisaService.getAllBusinessVisas();
      res.status(httpStatus.OK).json({
        success: true,
        data: businessVisas,
        meta: {},
      } as IGenericResponse<IBusinessVisa[]>);
    }
  );

  static getBusinessVisaById = catchAsync(
    async (req: Request, res: Response) => {
      const businessVisa = await BusinessVisaService.getBusinessVisaById(
        req.params.id
      );
      res.status(httpStatus.OK).json({
        success: true,
        data: businessVisa,
        meta: {},
      } as IGenericResponse<IBusinessVisa>);
    }
  );
}
