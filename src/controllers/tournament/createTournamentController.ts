/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { CreateTournamentFactoryPlayoff } from '../../services/factories/createTournamentsFactory'
import { Controller } from '../protocols/IController'

export class CreateTournamentController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    let create: any
    if (request.body.type === 'P') {
      create = new CreateTournamentFactoryPlayoff()
    }

    const { body, statusCode } = await create.execute(request)
    return response.status(statusCode).json(body)
  }
}
