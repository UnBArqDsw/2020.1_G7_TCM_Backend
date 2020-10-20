import { Request, Response } from 'express'

import CreateSessionService from '../../services/session/createSessionService'

class SessionController {
  public async createSession(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const CreateSession = new CreateSessionService()
    const session = await CreateSession.execute(request)
    return response.status(session.statusCode).json(session.body)
  }
}

export default new SessionController()
