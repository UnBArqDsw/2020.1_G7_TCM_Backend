import { Router, Request, Response } from 'express'

import { CreateUserController } from '../controllers/user/createUserController'
import { SearchUserController } from '../controllers/user/searchUserController'
import { searchMyParticipartionController } from '../controllers/user/searchMyParticipartionController'
import userAuth from '../middlewares/userAuth'

const userRoutes = Router()

userRoutes.post('/user', async (request: Request, response: Response) => {
  const createUser = new CreateUserController()
  await createUser.handle(request, response)
})
// userRoutes.get(
//   '/user/:nickname',
//   async (request: Request, response: Response) => {
//     console.log("chegouuuuuu")
//     const SearchUser = new SearchUserController()
//     await SearchUser.handle(request, response)
//   },
// )

userRoutes.get(
  '/user/tournaments',userAuth,
  async (request: Request, response: Response) => {
    const SearchUser = new searchMyParticipartionController()
    await SearchUser.handle(request, response)
  },
)

export default userRoutes
