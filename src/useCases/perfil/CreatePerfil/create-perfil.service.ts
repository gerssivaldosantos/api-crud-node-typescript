import { Perfil } from '../../../entities/Perfil'

export class CreatePerfilService {
    constructor(
        private readonly perfilRepository: perfilRepositoryInterface
    ) {}

    async execute(perfil: Perfil): Promise<Perfil> {
        return this.perfilRepository.create(perfil);
    }
}