import { Response, Request } from 'express'
import CreateUserService from '../../services/user/createUserService'

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
    console.log(nickname)
    return response.json(nickname)
  }
}

export default new UserController()
