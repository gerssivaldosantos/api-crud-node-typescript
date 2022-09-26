import { Profile } from '@/entities/profile.entity'

export class CreateProfileService {
    constructor(
        private readonly profileRepository: ProfileRepositoryInterface
    ) {}

    async execute(profile: Profile): Promise<Profile> {
        return this.profileRepository.create(profile);
    }
}