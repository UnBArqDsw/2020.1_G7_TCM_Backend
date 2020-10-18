import { Response, Request } from 'express'
import CreateUserService from '../../services/user/createUserService'

class UserController {
  async createUser(request: Request, response: Response) {
    try {
      const createUser = new CreateUserService()
      const user = await createUser.execute(request.body)
      return response.json(user)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export default new UserController()
