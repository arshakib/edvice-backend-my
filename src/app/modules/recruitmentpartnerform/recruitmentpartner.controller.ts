import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { IGenericResponse } from "../../../interfaces/common";
import { RecruitmentPartnerService } from "./recruitmentpartner.service";
import { IRecruitmentPartner } from "./recruitmentpartner.interface";


export class RecruitmentPartnerController {
  static createRecruitmentPartner = catchAsync(
    async (req: Request, res: Response) => {
      const recruitmentPartnerData = req.body;
      const recruitmentPartner =
        await RecruitmentPartnerService.createRecruitmentPartner(
          recruitmentPartnerData
        );
      res.status(httpStatus.CREATED).json({
        success: true,
        data: recruitmentPartner,
        meta: {},
        message: "Recruitment partner submission created successfully",
      } as IGenericResponse<IRecruitmentPartner>);
    }
  );

  static getAllRecruitmentPartners = catchAsync(
    async (req: Request, res: Response) => {
      const recruitmentPartners =
        await RecruitmentPartnerService.getAllRecruitmentPartners();
      res.status(httpStatus.OK).json({
        success: true,
        data: recruitmentPartners,
        meta: {},
      } as IGenericResponse<IRecruitmentPartner[]>);
    }
  );

  static getRecruitmentPartnerById = catchAsync(
    async (req: Request, res: Response) => {
      const recruitmentPartner =
        await RecruitmentPartnerService.getRecruitmentPartnerById(
          req.params.id
        );
      res.status(httpStatus.OK).json({
        success: true,
        data: recruitmentPartner,
        meta: {},
      } as IGenericResponse<IRecruitmentPartner>);
    }
  );
}
