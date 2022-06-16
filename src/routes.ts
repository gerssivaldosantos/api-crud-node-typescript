import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { getUserByEmailController } from "./useCases/GetUserByEmail"

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handle(request, response)
})

router.get('/user', (request, response) => {
    return getUserByEmailController.handle(request, response)
})

router.get('/user-by-email', (request, response) => {
    return getUserByEmailController.handle(request, response)
})

export { router }