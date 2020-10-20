import { Router, Request, Response } from 'express'

import { CreateUserController } from '../controllers/user/createUserController'
import { SearchUserController } from '../controllers/user/searchUserController'

const userRoutes = Router()

userRoutes.post('/user', async (request: Request, response: Response) => {
  const createUser = new CreateUserController()
  await createUser.handle(request, response)
})
userRoutes.get(
  '/user/:nickname',
  async (request: Request, response: Response) => {
    const SearchUser = new SearchUserController()
    await SearchUser.handle(request, response)
  },
)

export default userRoutes
