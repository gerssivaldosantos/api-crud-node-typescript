import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user-by-id.service";


export class DeleteUserController {
    constructor ( 
        private readonly deleteUserUseCase: DeleteUserUseCase
    ) {}

    public async handler(request: Request, response: Response): Promise<void> {
        try{
            if (!request.params.id) {
                response.status(400).send('Missing id');
            }
            await this.deleteUserUseCase.execute(request.params.id);
        } catch(error){
            response.status(400).send(error.message);
        }

    }
}