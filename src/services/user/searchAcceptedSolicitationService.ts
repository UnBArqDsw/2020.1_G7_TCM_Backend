import { getRepository } from 'typeorm'
import { Request } from 'express'
import AppError from '../../errors/appError'
import { Result, Service } from '../protocols/IServices'
import Solicitations from '../../models/solicitations/solitications'


class SearchAcceptedSolicitationService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { id } = request.user
    const s = new Solicitations()


        try {
            const solicitationRepository = getRepository(Solicitations)
            await solicitationRepository.save(s)
            const solicitation = await solicitationRepository.find({ where: { requester: id, accepted: false }, relations:['tournaments']})    
            
            for(var t in solicitation){
                delete(solicitation[t].id)
                delete(solicitation[t].accepted)
                delete(solicitation[t].tournaments.manager)
            }

            return {
                body: { solicitation },
                statusCode: 200,
            }
                
        } catch (error) {
            return {
                body: { mensage: "Erro ao buscar torneios que participo!" },
                statusCode: 500,
            }
              
        }
    
  }
}

export default SearchAcceptedSolicitationService