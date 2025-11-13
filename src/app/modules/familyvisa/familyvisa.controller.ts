import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { FamilyVisaService } from "./familyvisa.service";
import { IFamilyVisa } from "./familyvisa.interface";


export class FamilyVisaController {
  static createFamilyVisa = catchAsync(async (req: Request, res: Response) => {
    const familyVisaData = req.body;
    const familyVisa = await FamilyVisaService.createFamilyVisa(familyVisaData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: familyVisa,
      meta: {},
      message: "FamilyVisa submission created successfully",
    } as IGenericResponse<IFamilyVisa>);
  });

  static getAllFamilyVisas = catchAsync(async (req: Request, res: Response) => {
    const familyVisas = await FamilyVisaService.getAllFamilyVisas();
    res.status(httpStatus.OK).json({
      success: true,
      data: familyVisas,
      meta: {},
    } as IGenericResponse<IFamilyVisa[]>);
  });

  static getFamilyVisaById = catchAsync(async (req: Request, res: Response) => {
    const familyVisa = await FamilyVisaService.getFamilyVisaById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: familyVisa,
      meta: {},
    } as IGenericResponse<IFamilyVisa>);
  });
}
