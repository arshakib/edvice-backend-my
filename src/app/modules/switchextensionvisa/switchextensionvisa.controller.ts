import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { SwitchExtensionVisaService } from "./switchextensionvisa.service";
import { ISwitchExtensionVisa } from "./switchextensionvisa.interface";

export class SwitchExtensionVisaController {
  static createSwitchExtensionVisa = catchAsync(
    async (req: Request, res: Response) => {
      const switchExtensionVisaData = req.body;
      const switchExtensionVisa =
        await SwitchExtensionVisaService.createSwitchExtensionVisa(
          switchExtensionVisaData
        );
      res.status(httpStatus.CREATED).json({
        success: true,
        data: switchExtensionVisa,
        meta: {},
        message: "SwitchExtensionVisa submission created successfully",
      } as IGenericResponse<ISwitchExtensionVisa>);
    }
  );

  static getAllSwitchExtensionVisas = catchAsync(
    async (req: Request, res: Response) => {
      const switchExtensionVisas =
        await SwitchExtensionVisaService.getAllSwitchExtensionVisas();
      res.status(httpStatus.OK).json({
        success: true,
        data: switchExtensionVisas,
        meta: {},
      } as IGenericResponse<ISwitchExtensionVisa[]>);
    }
  );

  static getSwitchExtensionVisaById = catchAsync(
    async (req: Request, res: Response) => {
      const switchExtensionVisa =
        await SwitchExtensionVisaService.getSwitchExtensionVisaById(
          req.params.id
        );
      res.status(httpStatus.OK).json({
        success: true,
        data: switchExtensionVisa,
        meta: {},
      } as IGenericResponse<ISwitchExtensionVisa>);
    }
  );
}
