import { Response } from 'express'

import createSessionService from '../../services/session/createSessionService'

interface Request {
  email: string
  password: string
}

class SessionController {
  public async createSession(
    { email, password }: Request,
    response: Response,
  ): Promise<Response> {
    const session = await createSessionService.execute(email, password)
    return response.status(200).json(session)
  }
}

export default new SessionController()
