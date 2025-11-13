
import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { TestPrepService } from "./testprep.service";
import ITestPrep from "./testprep.interface";

export class TestPrepController {
  static createTestPrep = catchAsync(async (req: Request, res: Response) => {
    const testPrepData = req.body;
    const testPrep = await TestPrepService.createTestPrep(testPrepData);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: testPrep,
      meta: {},
      message: "TestPrep submission created successfully",
    } as IGenericResponse<ITestPrep>);
  });

  static getAllTestPreps = catchAsync(async (req: Request, res: Response) => {
    const testPreps = await TestPrepService.getAllTestPreps();
    res.status(httpStatus.OK).json({
      success: true,
      data: testPreps,
      meta: {},
    } as IGenericResponse<ITestPrep[]>);
  });

  static getTestPrepById = catchAsync(async (req: Request, res: Response) => {
    const testPrep = await TestPrepService.getTestPrepById(req.params.id);
    res.status(httpStatus.OK).json({
      success: true,
      data: testPrep,
      meta: {},
    } as IGenericResponse<ITestPrep>);
  });
}
