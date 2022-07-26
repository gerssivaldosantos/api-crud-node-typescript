import { Request, Response } from "express";
import { GetUserUseCase } from "./get-user.service";

export class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const user = await this.getUserUseCase.execute();

            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            });
        }
    }
}