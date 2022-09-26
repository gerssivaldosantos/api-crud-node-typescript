import { CheckTokenMiddlewareInteraface } from "../check-token-middleware.interface";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { TokenPayload } from "@/generic/dtos/token-payload.dto";

export class JwtTokenMiddleware implements CheckTokenMiddlewareInteraface {

    constructor(private secretKey: string) { }

    public async checkToken(request: Request, response: Response, next: NextFunction): Promise<void> {
        const { authorization } = request.headers;

        try {
            if (!authorization) throw new Error('Token not provided')

            const data = jwt.verify
                (
                    authorization.replace('Bearer', '').trim(),
                    this.secretKey
                )
            const { id, iat, exp } = data as TokenPayload
            request.userId = id
            request.iat = iat
            request.exp = exp
            return next()

        } catch (error) {
            throw new Error(error.message || 'Unexpected Error')
        }

    }
}