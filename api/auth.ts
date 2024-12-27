import { AuthController } from "@controllers/auth";
import { Router } from "express"

export const AuthRouter = Router();

//@ts-ignore
AuthRouter.post("/send", AuthController.SendSmsOtp);

//@ts-ignore
AuthRouter.post("/verify", AuthController.VerifySmsOtp);