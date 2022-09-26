import { Repository } from "typeorm";
import { AppDataSource } from "@/databases/typeorm/data-source";
import { Profile } from "@/entities/profile.entity";
import { ProfileRepositoryInterface } from "@/repositories/profile-repository.interface";

export class TypeormProfileRepository implements ProfileRepositoryInterface {
    constructor (private readonly profileRepository?: Repository<Profile>){
        if (!profileRepository) {
            this.profileRepository = AppDataSource.getRepository(Profile);
        }
    }
    async save(profile: Profile): Promise<void> {
        try {
            await this.profileRepository.save(profile);
        } catch (error) {
            throw new Error(error.message || "Error saving profile");
        }
    }
    async findById(id: string): Promise<Profile> {
        return this.profileRepository.findOne({where: {id}});
    }
    async findAll(): Promise<Profile[]> {
        throw new Error("Method not implemented.");
    }
    async update(profile: Profile): Promise<void> {
        const profileSearched = await this.profileRepository.findOne({where: {id: profile.id}});
        if (!profileSearched) {
            throw new Error("Profile not found");
        }
        await this.profileRepository.update(profile.id, profile);
    }
    async delete(id: string): Promise<void> {
        const profileSearched = await this.profileRepository.findOne({where: {id}});
        if (!profileSearched) {
            throw new Error("Profile not found");
        }
        await this.profileRepository.delete(id);
    }
}