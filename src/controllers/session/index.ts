import { Response } from 'express'

interface Request {
  email: string
  password: string
}

class SessionController {
  public async createSession(
    { email, password }: Request,
    response: Response,
  ): Promise<Response> {
    return response.status(200).json({ email, password })
  }
}

export default new SessionController()
