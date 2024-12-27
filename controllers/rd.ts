import { PlatformError } from "@errors/platform";
import { RdService } from "@services/rd";
import type { Request, Response } from "express";

const GetProductTypes = async(req: Request, res: Response) => {
    const {
        customer_id
    } = req.query;
    if (customer_id && typeof customer_id === "string") {
        const data = await RdService.GetProductTypes(customer_id);
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
}

export const RdController = {
    GetProductTypes
}