/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'
import { Result } from '../protocols/IServices'
import Round from '../../models/round/round'
import Matchs from '../../models/match/match'
import CreateMatchService from '../match/createMatchService'

export class CreateRoundService {
  public async execute(name: string, status: boolean): Promise<Result> {
    const roundRepository = getRepository(Round)
    const matchRepository = await getRepository(Matchs)
    let match = new Matchs()

    let entrada = ['fb0c6ff6-1ed0-4fe0-9c50-63e864b32139','880b5c3d-98fa-4acb-bd3c-adad06d55f66','608b815f-18e0-4a83-86c6-fad55578ab06']
    let matchs_ids:string[] = []

    

    function participantRandom(){
      let aux = Math.floor(Math.random() * entrada.length);
      const participant = entrada[aux]
      entrada = entrada.filter(v => v !== participant);
      return participant;
    }
    const createMatch = new CreateMatchService()

    if(entrada.length%2 ==0){
      const particpant1 = participantRandom();
      const match_result = await createMatch.execute('',particpant1,'')
      matchs_ids.push(String(match_result.match_id))

    }

    while(entrada.length != 0){
      const particpant1 = participantRandom();
      const particpant2 = participantRandom();
      
      console.log("entrada", entrada);
      const match_result = await createMatch.execute('',particpant1,particpant2)
      matchs_ids.push(String(match_result.match_id))
    }
  
    let round = new Round()
    try {
      
      round.name = name
      round.status = status
      round.matchs_ids = matchs_ids
      const round_aux = await roundRepository.save(round)

    } catch (error) {
      console.log(error)
    }

    // match.round_id =

    return { body: { round }, statusCode: 200 }
  }
}


