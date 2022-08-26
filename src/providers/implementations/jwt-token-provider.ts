import { TokenProviderInterface } from "../token-provider.interface";
import jwt from "jsonwebtoken";

export class JwtTokenProvider implements TokenProviderInterface {
    constructor() { }

    public async create(id: string): Promise<string> {
        return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
    }
}