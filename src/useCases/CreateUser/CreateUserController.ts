import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";
export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })

            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}