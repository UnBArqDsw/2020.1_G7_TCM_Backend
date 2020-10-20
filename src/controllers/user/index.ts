import { Response, Request } from 'express'
import { CreateUserFactory } from '../../services/creator/createUserFactory'
import { SearchUserFactory } from '../../services/creator/seacrhUserFactory'

class UserController {
  async createUser(request: Request, response: Response): Promise<Response> {
    const user = new CreateUserFactory()
    const { statusCode, body } = await user.execute(request)
    return response.status(statusCode).json(body)
  }

  async findByNickname(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user = new SearchUserFactory()
    const { statusCode, body } = await user.execute(request)
    return response.status(statusCode).json(body)
  }
}

export default new UserController()
