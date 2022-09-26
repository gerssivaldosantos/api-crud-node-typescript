import { JwtTokenMiddleware } from "@/middlewares/implementations/jwt-token-middleware";

const checkTokenMiddleware = new JwtTokenMiddleware(process.env.JWT_SECRET_KEY)

export { checkTokenMiddleware } 