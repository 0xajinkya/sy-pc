import { PlatformError } from "@errors/platform";
import { AuthService } from "@services/auth"
import type { Request, Response } from "express"

const SendSmsOtp = async (req: Request, res: Response) => {
    const {
        mobile_number
    } = req.query;

    if (mobile_number && typeof mobile_number === "string") {
        const data = await AuthService.SendSmsOtp({ mobile_number: mobile_number })
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
}

const VerifySmsOtp = async (req: Request, res: Response) => {
    const {
        otp
    } = req.query;
    if (otp && typeof otp === "string") {
        const data = await AuthService.VerifySmsOtp({ otp: otp })
        return res.status(200).json(data);
    }
    throw new PlatformError("InvalidInput");
}

export const AuthController = {
    SendSmsOtp,
    VerifySmsOtp
}