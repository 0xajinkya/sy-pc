import { RdController } from "@controllers/rd";
import { Router } from "express";

export const RdRouter = Router();

//@ts-ignore
RdRouter.get("/product-types", RdController.GetProductTypes)