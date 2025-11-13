import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { ILRVisaService } from "./ILRVisa.service";
import { IILRVisa } from "./ILRVisa.interface";


export class ILRVisaController {
  static createILRVisa = catchAsync(async (req: Request, res: Response) => {
    const ilrVisaData = req.body;
    const ilrVisa = await ILRVisaService.createILRVisa(ilrVisaData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: ilrVisa,
      meta: {},
      message: "ILRVisa submission created successfully",
    } as IGenericResponse<IILRVisa>);
  });

  static getAllILRVisas = catchAsync(async (req: Request, res: Response) => {
    const ilrVisas = await ILRVisaService.getAllILRVisas();
    res.status(httpStatus.OK).json({
      success: true,
      data: ilrVisas,
      meta: {},
    } as IGenericResponse<IILRVisa[]>);
  });

  static getILRVisaById = catchAsync(async (req: Request, res: Response) => {
    const ilrVisa = await ILRVisaService.getILRVisaById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: ilrVisa,
      meta: {},
    } as IGenericResponse<IILRVisa>);
  });
}
