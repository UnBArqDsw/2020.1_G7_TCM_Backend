import { Response, Request } from 'express'

interface User {
  name: string
  email: string
  password: string
  birthday: Date
  level: string
}

class UserController {
  createUser(request: Request, response: Response) {
    try {
      const { name, email, password, birthday, level } = request.body
      const user: User = { name, email, password, birthday, level }
      response.status(200).json(user)
    } catch (error) {
      response.status(400).json(error)
    }
  }
}

export default new UserController()
