import {CheckTokenService} from "./check-token.service";
import {Request, Response} from "express";

export class CheckTokenController {
    constructor(
        private useCase:CheckTokenService
    ) {
    }

    async handle(request: Request, response:Response) {
        try {
            await this.useCase.execute(request.body.token)
            return response.status(201).json({ message: "Valid Token" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}
