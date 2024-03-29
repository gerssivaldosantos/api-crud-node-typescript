import { Request, Response } from "express";
import { LoginDTO } from "./login.dto";
import { LoginUseCase } from "./login.service";

export class LoginController {
    constructor(
        private readonly LoginUseCase: LoginUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const result = await this.LoginUseCase.execute(request.body as LoginDTO)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}
