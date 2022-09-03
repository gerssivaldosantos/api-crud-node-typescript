import { Request, Response } from "express";
import { Profile } from "@/entities/profile.entity";
import { CreateProfileService } from "./create-profile.service";

export class CreateProfileController {
    constructor(
        private readonly createProfileService: CreateProfileService
    ) {}

    async handle(request: Request, response: Response) {
        try {
            await this.createProfileService.execute(request.body as Profile)
            return response.status(201).json({ message: "Profile Created" })
        } catch (error:any) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}