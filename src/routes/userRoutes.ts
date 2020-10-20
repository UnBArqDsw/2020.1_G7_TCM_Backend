import { Router, Request, Response } from 'express'

import userController from '../controllers/user'

const userRoutes = Router()

userRoutes.post('/user', async (request: Request, response: Response) => {
  await userController.createUser(request, response)
})
userRoutes.get(
  '/user/:nickname',
  async (request: Request, response: Response) => {
    await userController.findByNickname(request, response)
  },
)

export default userRoutes
