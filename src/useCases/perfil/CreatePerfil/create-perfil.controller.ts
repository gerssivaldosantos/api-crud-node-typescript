import { Request, Response } from "express";
import { CreatePerfilService } from "./create-perfil.service";

export class CreatePerfilController {
    constructor(
        private readonly createPerfilService: CreatePerfilService
    ) {}

    async handle(request: Request, response: Response) {
        try {
            await this.createPerfilService.execute(request.body as Perfil)
            return response.status(201).json({ message: "Perfil Created" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}