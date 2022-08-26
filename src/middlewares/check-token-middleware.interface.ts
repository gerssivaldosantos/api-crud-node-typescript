import { NextFunction, Request, Response } from "express"

export interface CheckTokenMiddlewareInteraface {
    checkToken(request: Request, response: Response, next: NextFunction): Promise<void>
}