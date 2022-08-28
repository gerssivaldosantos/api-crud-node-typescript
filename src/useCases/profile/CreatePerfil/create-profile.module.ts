import { profileRepository } from "../profile.repository";
import { CreateProfileController } from "./create-profile.controller";
import { CreateProfileService } from "./create-profile.service";

const createProfileService = new CreateProfileService(profileRepository);
const createProfileController = new CreateProfileController(createProfileService);

export { createProfileController };