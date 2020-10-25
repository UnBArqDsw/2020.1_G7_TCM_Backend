import { Request, Response } from 'express'
import { CreateTournamentFactory } from '../../services/factories/createTournamentsFactory'
import { Controller } from '../protocols/IController'

export class CreateTournamentController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const create = new CreateTournamentFactory()
    const { body, statusCode } = await create.execute(request)
    return response.status(statusCode).json(body)
  }
}
