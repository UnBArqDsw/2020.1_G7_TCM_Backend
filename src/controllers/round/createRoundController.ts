/* eslint-disable no-useless-constructor */
import { Response, Request } from 'express'
import { Controller } from '../protocols/IController'

interface Round {
  name: string
  status: string
}

export class CreateRoundController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    // const user = new CreateUserFactory()
    const { name, status } = request.body
    const round: Round = { name, status }

    return response.status(200).json(round)
  }
}
export default new CreateRoundController()
