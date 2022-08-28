import { Profile } from "../entities/profile.entity";

export interface ProfileRepositoryInterface {
    save(profile: Profile): Promise<void>;
    findById(id: string): Promise<Profile | undefined>;
    findAll(): Promise<Profile[]>;
    update(profile: Profile): Promise<void>;
    delete(id: string): Promise<void>;
}