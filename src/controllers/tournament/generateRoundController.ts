/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { Controller } from '../protocols/IController'
import { GenerationRound } from '../../services/tournaments/generateRound'

export class GenerationRoundController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const create = new GenerationRound()
    const { tournaments } = request.params
    const { body, statusCode } = await create.execute(tournaments)
    return response.status(statusCode).json(body)
  }
}
