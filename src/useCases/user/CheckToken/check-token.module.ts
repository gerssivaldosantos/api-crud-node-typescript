import {CheckTokenService} from "./check-token.service";
import {CheckTokenController} from "./check-token.controller";

const useCase = new CheckTokenService()
const checkTokenController = new CheckTokenController(useCase)

export { checkTokenController }
