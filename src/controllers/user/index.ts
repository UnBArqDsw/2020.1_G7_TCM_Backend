import { Response, Request } from 'express'
import CreateUserService from '../../services/user/createUserService'
import SearchByNicknameService from '../../services/user/searchByNicknameService'

class UserController {
  async createUser(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService()
    const user = await createUser.execute(request)
    return response.status(user.statusCode).json(user.body)
  }

  async findByNickname(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const searchByNickmane = new SearchByNicknameService()
    const user = await searchByNickmane.execute(request)
    return response.status(user.statusCode).json(user.body)
  }
}

export default new UserController()
