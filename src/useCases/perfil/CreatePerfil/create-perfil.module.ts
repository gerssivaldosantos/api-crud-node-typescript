import { perfilRepository } from "../perfil.repository";
import { CreatePerfilController } from "./create-perfil.controller";
import { CreatePerfilService } from "./create-perfil.service";

const createPerfilService = new CreatePerfilService(perfilRepository);
const createPerfilController = new CreatePerfilController(createPerfilService);

export { createPerfilController };