import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { getUserByEmailController } from "./useCases/GetUserByEmail"
import { updateUserController } from "./useCases/UpdateUser"

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handle(request, response)
})

router.get('/user', (request, response) => {
    return getUserByEmailController.handle(request, response)
})

router.get('/user-by-email/:email', (request, response) => {
    return getUserByEmailController.handle(request, response)
})

router.put('/user/:email', (request, response) => {
    return updateUserController.handle(request, response)
})

export { router }