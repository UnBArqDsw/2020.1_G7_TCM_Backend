import { Request, Response } from 'express'
import { CreatePlayoff } from '../../services/tournaments/createPlayoff'
import { Controller } from '../protocols/IController'

export class CreateTournamentController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const create = new CreatePlayoff()
    const { body, statusCode } = await create.execute(request)
    return response.status(statusCode).json(body)
  }
}
