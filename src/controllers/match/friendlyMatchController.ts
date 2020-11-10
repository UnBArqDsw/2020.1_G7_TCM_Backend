import { Request, Response } from 'express'
import  FriendlyMatchService from '../../services/match/friendlyMatch/friendlyMatchService'
import { Controller } from '../protocols/IController';

export  class FliendlyGetMatchController implements Controller {
    async handle(request: Request, response: Response): Promise<Response> {
      const {id} = request.params;
      const match = new FriendlyMatchService()
      const result = await match.getMatch(id);
      return response.status(Number(result.statusCode)).json(result)
    }
}

export  class FliendlyAddResultController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const {match_id, score, winner_id  } = request.body;
    const match = new FriendlyMatchService()
    const result = await match.addResult(match_id, score, winner_id );
    return response.status(result.statusCode).json(result)
  }
}

export  class FliendlyAddStatusController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const {match_id, status  } = request.body;
    const match = new FriendlyMatchService()
    const result = await match.setState(match_id, status);
    return response.status(result.statusCode).json(result)
  }
}
