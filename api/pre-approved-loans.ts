import { PreApprovedLoansController } from "@controllers/pre-approved-loans";
import { Router } from "express";

export const PreApprovedLoansRouter = Router();

//@ts-ignore
PreApprovedLoansRouter.get("/validation/aadharcard", PreApprovedLoansController.AddharcardValidation);

//@ts-ignore
PreApprovedLoansRouter.get("/validation/voterid", PreApprovedLoansController.VoteridValidation);

//@ts-ignore
PreApprovedLoansRouter.get("/validation/monthly-income", PreApprovedLoansController.IncomeValidation);

//@ts-ignore
PreApprovedLoansRouter.get("/validation/guarantor-details", PreApprovedLoansController.GurantorValidation);

//@ts-ignore
PreApprovedLoansRouter.get("/product-types", PreApprovedLoansController.GetProductTypes)