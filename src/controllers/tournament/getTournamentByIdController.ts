import { Request, Response } from 'express'
import { GetTournamentByIdService } from '../../services/tournaments/getTournamentByIdService'
import { Controller } from '../protocols/IController'

export class GetTournamentByIdController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const tournament = new GetTournamentByIdService()
    const { body, statusCode } = await tournament.execute(request)
    return response.status(statusCode).json(body)
  }
}
