/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { Controller } from '../protocols/IController'
import { CreateRoundService } from '../../services/round/createRoundService'

export class CreateRoundController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    // const user = new CreateUserFactory()
    const create = new CreateRoundService()
    const { body, statusCode } = await create.execute(request)
    return response.status(statusCode).json(body)
  }
}
