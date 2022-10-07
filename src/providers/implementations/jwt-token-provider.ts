import { TokenProviderInterface } from "../token-provider.interface";
import jwt from "jsonwebtoken";
import {TokenPayload} from "@/generic/dtos/token-payload.dto";

export class JwtTokenProvider implements TokenProviderInterface {
    constructor() { }

    public async create(id: string): Promise<string> {
        return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
    }

    check(token: string): boolean {
            if (!token) throw new Error('Token not provided')
            try {
                jwt.verify
                (
                    token.replace('Bearer', '').trim(),
                    process.env.JWT_SECRET_KEY
                )
            } catch (err) {
                console.error(err)
            }
            return true
 }

    get_info(token: string): { id: string; exp: number; iat: number } {
        if (!token) throw new Error('Token not provided')

        const data = jwt.verify
        (
            token.replace('Bearer', '').trim(),
            process.env.JWT_SECRET_KEY
        )
        const { id, iat, exp } = data as TokenPayload
        return {id, iat, exp}
    }
}
