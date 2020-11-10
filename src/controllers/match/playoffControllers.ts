import { Request, Response } from 'express'
import PlayoffMatchService from '../../services/match/playoffMatch/playoffMatchService'
import { Controller } from '../protocols/IController'

export class PlayoffGetMatchController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const match = new PlayoffMatchService()
    const result = await match.getMatch(id)
    return response.status(Number(result.statusCode)).json(result)
  }
}

export class PlayoffGetAddResultController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { match_id, score, winner_id } = request.body
    const match = new PlayoffMatchService()
    const result = await match.addResult(match_id, score, winner_id)
    return response.status(result.statusCode).json(result)
  }
}

export class PlayoffAddStatusController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { match_id, status } = request.body
    const match = new PlayoffMatchService()
    const result = await match.setState(match_id, status)
    return response.status(result.statusCode).json(result)
  }
}
