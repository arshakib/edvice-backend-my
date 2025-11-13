import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { AccommodationService } from "./accommodation.service";
import { IAccommodation } from "./accommodation.interface";


export class AccommodationController {
  static createAccommodation = catchAsync(
    async (req: Request, res: Response) => {
      const accommodationData = req.body;
      const accommodation = await AccommodationService.createAccommodation(
        accommodationData
      );
      res.status(httpStatus.CREATED).json({
        success: true,
        data: accommodation,
        meta: {},
        message: "Accommodation submission created successfully",
      } as IGenericResponse<IAccommodation>);
    }
  );

  static getAllAccommodations = catchAsync(
    async (req: Request, res: Response) => {
      const accommodations = await AccommodationService.getAllAccommodations();
      res.status(httpStatus.OK).json({
        success: true,
        data: accommodations,
        meta: {},
      } as IGenericResponse<IAccommodation[]>);
    }
  );

  static getAccommodationById = catchAsync(
    async (req: Request, res: Response) => {
      const accommodation = await AccommodationService.getAccommodationById(
        req.params.id
      );
      res.status(httpStatus.OK).json({
        success: true,
        data: accommodation,
        meta: {},
      } as IGenericResponse<IAccommodation>);
    }
  );
}
