import { JwtTokenMiddleware } from "../../middlewares/implementations/JwtTokenMiddleware";

const checkTokenMiddleware = new JwtTokenMiddleware(process.env.JWT_SECRET_KEY)

export { checkTokenMiddleware } 