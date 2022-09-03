import { Request, Response } from "express";
import { User } from "@/entities/user.entity";
import { UpdateUserUseCase } from "./upate-user-by-id.service";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        try {
            if (!request.body.id) {
                return response.status(400).json({
                    error: 'User id is required'
                })
            }
            await this.updateUserUseCase.execute(request.body as User)
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }

}