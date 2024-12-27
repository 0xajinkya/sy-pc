import { PlatformError } from "@errors/platform";
import { PreApprovedLoansService } from "@services/pre-approved-loans";
import type { Request, Response } from "express";

const AddharcardValidation = async(req: Request, res: Response) => {
    const {
        customer_id,
        aadharcard_number,
        token
    } = req.query;
    if (customer_id && typeof customer_id === "string" && aadharcard_number && typeof aadharcard_number === "string" && token && typeof token === "string") {
        const data = await PreApprovedLoansService.Validator(customer_id, aadharcard_number);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput", {
        message: "Please provide customer id and aadharcard number"
    });
};

const VoteridValidation = async(req: Request, res: Response) => {
    const {
        customer_id,
        voterid_number,
        token
    } = req.query;
    if (customer_id && typeof customer_id === "string" && voterid_number && typeof voterid_number === "string" && token && typeof token === "string") {
        const data = await PreApprovedLoansService.Validator(customer_id, voterid_number);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput", {
        message: "Please provide customer id and voter id"
    });
};


const IncomeValidation = async(req: Request, res: Response) => {
    const {
        customer_id,
        monthly_income,
        token
    } = req.query;
    if (customer_id && typeof customer_id === "string" && monthly_income && typeof monthly_income === "string") {
        const data = await PreApprovedLoansService.Validator(customer_id, monthly_income);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput", {
        message: "Please provide customer id and monthly income"
    });
};

const GurantorValidation = async(req: Request, res: Response) => {
    const {
        customer_id,
        full_name,
        contact_number,
        token
    } = req.query;
    if (customer_id && typeof customer_id === "string" && full_name && typeof full_name === "string" && contact_number && typeof contact_number === "string") {
        const data = await PreApprovedLoansService.Validator(customer_id, full_name);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput", {
        message: "Please provide customer id, full name and contact number"
    });
};

const GetProductTypes = async(req: Request, res: Response) => {
    const {
        customer_id,
        token
    } = req.query;

    if(customer_id && typeof customer_id === "string") {
        const data = await PreApprovedLoansService.GetProductTypes(customer_id);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
}

export const PreApprovedLoansController = {
    AddharcardValidation,
    VoteridValidation,
    IncomeValidation,
    GurantorValidation,
    GetProductTypes
}