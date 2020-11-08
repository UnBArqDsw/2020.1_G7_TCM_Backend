/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { Controller } from '../protocols/IController'
import { CreateRoundService } from '../../services/round/createRoundService'

export class CreateRoundController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    // const user = new CreateUserFactory()
    const create = new CreateRoundService()
    const { name, status } = request.body
    const { body, statusCode } = await create.execute(name, status)
    return response.status(statusCode).json(body)
  }
}
