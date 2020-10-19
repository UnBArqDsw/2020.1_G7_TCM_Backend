import { Router, response } from 'express'

import userController from '../controllers/user'

const userRoutes = Router()

userRoutes.get('/user', (request, response) => {
  response.json({ message: 'hello user' })
})

userRoutes.post('/user', async (request, response) => {
  await userController.createUser(request, response)
})
userRoutes.get('/user/:nickname', async (request, response) => {
  const { nickname } = request.params
  await userController.findByNickname(nickname, response)
})

export default userRoutes
