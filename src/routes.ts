import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { deleteUserController } from "./useCases/DeleteUserById"
import { getUserByEmailController } from "./useCases/GetUserByEmail"
import { loginController } from "./useCases/Login"
import { updateUserController } from "./useCases/UpdateUser"

const router = Router()

/* CRUD User */

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

router.delete('/user/:id', (request, response) => {
    return deleteUserController.handler(request, response)
})

/* Auth User */

router.post('/user/auth', (request, response)=> {
    return loginController.handle(request, response)
})

export { router }