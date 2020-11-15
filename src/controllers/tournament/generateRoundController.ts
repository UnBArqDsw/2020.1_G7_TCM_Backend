/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { Controller } from '../protocols/IController'
// import { GenerationRound } from '../../services/tournaments/generateRound'
import { GenerationNextRound } from '../../services/tournaments/generateNextRound'

export class GenerationRoundController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const tournaments = new GenerationNextRound()
    const { body, statusCode } = await tournaments.execute(request)
    return response.status(statusCode).json(body)
  }
}
