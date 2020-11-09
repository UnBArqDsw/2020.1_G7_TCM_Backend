import { getRepository } from 'typeorm'
import { Request } from 'express'
import Matchs from '../../models/match/match'
import User from '../../models/user/user'
import AppError from '../../errors/appError'
import { Result, Service } from '../protocols/IServices'

class CreateFriendlyMatchService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { user_id, opponent_id } = request.body;
    console.log(user_id,opponent_id)

    const matchRepository = getRepository(Matchs)

    let match = new Matchs()

    match.player1_id = user_id
    match.player1_id = opponent_id
    match.status = 'C'


    try {
        const create = await matchRepository.create(match)
        await matchRepository.save(create)
        return {
            body: { match },
            statusCode: 200,
          }
    } catch (error) {
        throw new AppError('Create Match ERROR.', 500)
    }  
        
    // return {body:"",statusCode:500}
  }
}

export default CreateFriendlyMatchService
