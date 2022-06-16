import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController {
    constructor ( 
        private readonly deleteUserUseCase: DeleteUserUseCase
    ) {}

    public async handler(request: Request, response: Response): Promise<void> {
        await this.deleteUserUseCase.execute(request.params.id);
    }
}