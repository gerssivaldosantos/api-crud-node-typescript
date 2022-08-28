import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./get-user-by-id.service";

export class GetUserByIdController {
    constructor(private getUserByIdUseCase: GetUserByIdUseCase){}
    async handle(request: Request, response: Response): Promise<Record<string, any>> {
        try {
            const user = await this.getUserByIdUseCase.execute(request.params.id)
            return response.status(200).json({
                user: user
            })
        } catch(error) {
            return response.status(error === 'User Not Found' ? 404 : 500).json({
                error: error
            })
        }

    }
}