import { Request, Response } from "express";
import { LoginDTO } from "./LoginDTO";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(
        private readonly LoginUseCase: LoginUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const token = await this.LoginUseCase.execute(request.body as LoginDTO)
            return response.status(201).json({
                token: token
            })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}