import { FdController } from "@controllers/fd";
import { Router } from "express";

export const FdRouter = Router();

//@ts-ignore
FdRouter.get("/product-types", FdController.GetProductTypes)