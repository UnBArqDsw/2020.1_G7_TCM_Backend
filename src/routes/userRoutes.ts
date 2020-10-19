import { Router } from 'express'

import userController from '../controllers/user'

const userRoutes = Router()

userRoutes.get('/user', (request, response) => {
  response.json({ message: 'hello user' })
})

userRoutes.post('/user', async (request, response) => {
  await userController.createUser(request, response)
})

export default userRoutes
