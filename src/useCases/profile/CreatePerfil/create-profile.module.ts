import { profileRepository } from "../profile.repository";
import { CreatePerfilController } from "./create-profile.controller";
import { CreatePerfilService } from "./create-profile.service";

const createPerfilService = new CreatePerfilService(profileRepository);
const createPerfilController = new CreatePerfilController(createPerfilService);

export { createPerfilController };