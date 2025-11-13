import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { BookAppointmentService } from "./book-appoinment.service";
import { IBookAppointment } from "./book-appoinment.interface";

export class BookAppointmentController {
  static createBookAppointment = catchAsync(
    async (req: Request, res: Response) => {
      const BookAppointmentData = req.body;
      const BookAppointment =
        await BookAppointmentService.createBookAppointment(BookAppointmentData);
      res.status(httpStatus.CREATED).json({
        success: true,
        data: BookAppointment,
        meta: {},
        message: "Book appointment submission created successfully",
      } as IGenericResponse<IBookAppointment>);
    }
  );

  static getAllBookAppointments = catchAsync(
    async (req: Request, res: Response) => {
      const BookAppointments =
        await BookAppointmentService.getAllBookAppointments();
      res.status(httpStatus.OK).json({
        success: true,
        data: BookAppointments,
        meta: {},
      } as IGenericResponse<IBookAppointment[]>);
    }
  );

  static getBookAppointmentById = catchAsync(
    async (req: Request, res: Response) => {
      const BookAppointment =
        await BookAppointmentService.getBookAppointmentById(req.params.id);
      res.status(httpStatus.OK).json({
        success: true,
        data: BookAppointment,
        meta: {},
      } as IGenericResponse<IBookAppointment>);
    }
  );

  /*
  static updateBookAppointment = catchAsync(async (req: Request, res: Response) => {
    const BookAppointment = await BookAppointmentService.updateBookAppointment(
      req.params.id,
      req.body,
      req.user?.id
    );
    res.status(httpStatus.OK).json({
      success: true,
      data: BookAppointment,
      meta: {},
      message: "Book appointment submission updated successfully",
    } as IGenericResponse<IBookAppointment>);
  });
  */
}
