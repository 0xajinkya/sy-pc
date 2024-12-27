import { CustomerController } from "@controllers/customer";
import { Router } from "express";

export const CustomerRouter = Router();

//@ts-ignore
CustomerRouter.get("/accounts", CustomerController.GetCustomerAccounts);

//@ts-ignore
CustomerRouter.get("/accounts/statements", CustomerController.GetCustomerAccountStatements);
