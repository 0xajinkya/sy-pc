import { PlatformError } from "@errors/platform";
import { CustomerService } from "@services/customer";
import type { Request, Response } from "express";

const GetCustomerAccounts = async(req: Request, res: Response) => {
    const {
        customer_id
    } = req.query;
    if (customer_id && typeof customer_id === "string") {
        const data = await CustomerService.GetCustomerAccounts(customer_id);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
};

const GetCustomerAccountStatements = async(req: Request, res: Response) => {
    const {
        customer_id,
        account_id
    } = req.query;
    if (customer_id && typeof customer_id === "string" && account_id && typeof account_id === "string") {
        const data = await CustomerService.GetCustomerAccountStatements(customer_id, account_id);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
};

export const CustomerController = {
    GetCustomerAccounts,
    GetCustomerAccountStatements
};