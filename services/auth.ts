import { PlatformError } from "@errors/platform";
import type { ISendSmsOtp, IVerifyOtp } from "@interfaces/auth";
import { envconfig } from "@libraries/envconfig";
import { helper } from "@libraries/helper";
import { Jwt } from "@libraries/jwt";
import { matchMobileNumber } from "@utils/match-mobile-number";
import type { CookieOptions, Response } from "express";
import ms from 'ms';
import { AuthHelperService } from "./auth-helper";

const COOKIE_OPTIONS: CookieOptions = {
    httpOnly: true,
    secure: typeof envconfig.authentication.cookie.ssl !== 'undefined',
    domain: envconfig.authentication.domain,
    sameSite:
        envconfig.authentication.cookie.sameSite &&
            ['none', 'lax', 'strict'].includes(
                envconfig.authentication.cookie.sameSite
            )
            ? envconfig.authentication.cookie.sameSite
            : 'lax',
    signed: false
};

const expiresIn = {
    access_token: ms(envconfig.authentication.jwt.expires_in || '15m'),
    csrf_token: ms('24h'),
    refresh_token: ms(envconfig.authentication.jwt.refresh_expires_in || '30d')
};

const createToken = (payload: {
    data: {
        id: string;
        user_type: string;
    }
}) => {
    return Jwt.create(payload, {
        jwtid: helper.getId(),
        expiresIn: `${expiresIn.access_token}ms`,
        subject: payload.data.id
    })
};

const createCookie = (response: Response, data: {
    access_token: string;
}) => {
    if (data.access_token) {
        response.cookie(
            AuthHelperService.cookieKeys.access_token,
            data.access_token,
            {
                ...COOKIE_OPTIONS,
                maxAge: expiresIn.access_token
            }
        );
    };
    return response;
}

const SendSmsOtp = async (data: ISendSmsOtp) => {
    const isMobileNumber = matchMobileNumber(data.mobile_number);
    if (!isMobileNumber || isMobileNumber[0] !== data.mobile_number) {
        throw new PlatformError("InvalidInput");
    }
    return {
        status: 201,
        content: {
            message: "The otp is sent successfully."
        }
    }
};



const VerifySmsOtp = async (data: IVerifyOtp) => {
    const staticOtp = "1234";

    if (data.otp !== staticOtp) {
        throw new PlatformError("InvalidCredentials");
    };
    const token_payload = {
        data: {
            id: Math.random().toString(36).substring(2, 15),
            user_type: "CUSTOMER"
        }
    };
    const token = createToken(token_payload);

    return {
        status: 200,
        content: {
            data: {
                message: "The otp has been validated successfully.",
                token: token,
            }
        }
    }

}

export const AuthService = {
    SendSmsOtp,
    VerifySmsOtp,
    createCookie
};