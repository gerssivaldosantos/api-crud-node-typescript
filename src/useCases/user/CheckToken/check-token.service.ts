import jwt from "jsonwebtoken";

export class CheckTokenService {
    constructor() {
    }

    async execute(token:string) {

        try {
            if (!token) new Error('Token not provided')
            jwt.verify
            (
                token.replace('Bearer', '').trim(),
                process.env.JWT_SECRET_KEY
            )
        } catch (error) {
            throw new Error(error.message || 'Unexpected Error')
        }
    }
}
