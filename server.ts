import { AuthRouter } from "@api/auth";
import { CustomerRouter } from "@api/customer";
import { FdRouter } from "@api/fd";
import { PreApprovedLoansRouter } from "@api/pre-approved-loans";
import { RdRouter } from "@api/rd";
import { NotFoundError } from "@errors/not-found";
import { AppLoader } from "@loaders/app";
import { ErrorHandler } from "@middlewares/error-handler";
import express from "express";

export const Server = async() => {
    const app = express();
    AppLoader({ app });
    
    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    app.use("/api/v1/sms-otp", AuthRouter)

    app.use("/api/v1/customer", CustomerRouter); 

    app.use("/api/v1/fixed-deposit", FdRouter);

    app.use("/api/v1/pre-approved-loan", PreApprovedLoansRouter);

    app.use("/api/v1/recurring-deposit", RdRouter);

    app.all("*", (req, res) => {
        throw new NotFoundError();
    });

    //@ts-ignore
    app.use(ErrorHandler);

    return {
        app
    }
}