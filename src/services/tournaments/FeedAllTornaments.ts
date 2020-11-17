/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository, Not } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Tournaments from '../../models/tournament/tournament'

export class FeedAllTournamentsService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { id } = request.user

    const playoffRepository = getRepository(Tournaments)

    const tournament = await playoffRepository.find({where:{manager: Not(id), status: true}})
    
    if(typeof(tournament)!== 'undefined'){
        
        for(var t in tournament){
            delete(tournament[t].updated_at)
            delete(tournament[t].created_at)
            delete(tournament[t].manager.password)
            delete(tournament[t].manager.birthday)
            delete(tournament[t].manager.level)
            delete(tournament[t].manager.created_at)
            delete(tournament[t].manager.updated_at)
        }
    
        return { body: { tournament }, statusCode: 200 }
    }
    else{
        return { body: { mensage: "ERRO ao buscar" }, statusCode: 500 }
    }
    
    
  }
}
