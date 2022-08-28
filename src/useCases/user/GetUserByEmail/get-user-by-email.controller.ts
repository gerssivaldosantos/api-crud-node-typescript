import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "./get-user-by-email.service";


export class GetUserByEmailController {
    constructor(
        private getUserByEmailUseCase: GetUserByEmailUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { email } = request.body

        try {
            const user = await this.getUserByEmailUseCase.execute(email)

            return response.status(200).json(user)
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}