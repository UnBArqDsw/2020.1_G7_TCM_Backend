import { Request, Response } from 'express'
import CreateFriendlyMatchService from '../../services/match/createFriendlyMatchService'
// import CreateMatchService from '../../services/match/createMatchService'

import { Controller } from '../protocols/IController'

export default class CreateFriendlyMatchController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const create = new CreateFriendlyMatchService()
    const { body, statusCode } = await create.execute(request)
    return response.status(statusCode).json(body)
  }
}

// export default class CreateFriendlyMatchController implements Controller {
//     async handle(request: Request, response: Response): Promise<Response> {
//       const create = new CreateMatchService()
//       const {tournament_id ,participant1,participant2} = request.body
//       const result = await create.execute(tournament_id ,participant1,participant2)
//       console.log(result)
//       return response.status(200).json(result)
//     }
//   }
  