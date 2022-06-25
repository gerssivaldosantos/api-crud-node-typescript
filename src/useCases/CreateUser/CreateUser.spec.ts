import { createUserUseCase } from "."
import { User } from "../../entities/User"

describe('Create User', () => {
    it('should be able to create a new user', async () => {
        
        const requestBody: User = { 
            name: 'Tester', 
            email: 'test@noemail.com', 
            password: 'newpassword#@12343' }
        const  user = await createUserUseCase.execute(requestBody)
        expect(user).toHaveProperty('id')
    })
})