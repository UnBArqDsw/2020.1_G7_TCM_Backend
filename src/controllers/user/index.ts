import { Response, Request } from 'express'
import CreateUserService from '../../services/user/createUserService'

class UserController {
  createUser(request: Request, response: Response) {
    try {
      const createUser = new CreateUserService()
      createUser.execute(request.body)
      return response.status(400).json(request.body)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new UserController()
