import { Request, Response } from 'express'
import { SessionFactory } from '../../services/factories/sessionCreationFactory'

class SessionController {
  public async createSession(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const session = new SessionFactory()
    const { body, statusCode } = await session.execute(request)
    return response.status(statusCode).json(body)
  }
}

export default new SessionController()
