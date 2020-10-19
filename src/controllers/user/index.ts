import { Response, Request } from 'express'
import CreateUserService from '../../services/user/createUserService'
import SearchByNicknameService from '../../services/user/searchByNicknameService'

class UserController {
  async createUser(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService()
    const user = await createUser.execute(request.body)
    return response.json(user)
  }

  async findByNickname(
    nickname: string,
    response: Response,
  ): Promise<Response> {
    const searchByNickmane = new SearchByNicknameService()
    const user = await searchByNickmane.execute(nickname)
    return response.json(user)
  }
}

export default new UserController()
