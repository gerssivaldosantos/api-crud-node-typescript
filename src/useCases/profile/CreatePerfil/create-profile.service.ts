import { Perfil } from '../../../entities/Profile'

export class CreatePerfilService {
    constructor(
        private readonly profileRepository: profileRepositoryInterface
    ) {}

    async execute(profile: Perfil): Promise<Perfil> {
        return this.profileRepository.create(profile);
    }
}