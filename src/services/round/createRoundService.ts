/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'
import { Result } from '../protocols/IServices'
import Round from '../../models/round/round'
import Matchs from '../../models/match/match'
import CreateMatchService from '../match/createMatchService'

export class CreateRoundService {
  public async execute(name: string, status: boolean, participant_ids: string[]): Promise<Result> {
    const roundRepository = getRepository(Round)
    const matchRepository = await getRepository(Matchs)
    let match = new Matchs()

    let matchs_ids:string[] = []

    function participantRandom(){
      let aux = Math.floor(Math.random() * participant_ids.length);
      const participant = participant_ids[aux]
      participant_ids = participant_ids.filter(v => v !== participant);
      return participant;
    }
    const createMatch = new CreateMatchService()

    if(participant_ids.length%2 !==0){
      const particpant1 = participantRandom();
      const match_result = await createMatch.execute('',particpant1,'')
      matchs_ids.push(String(match_result.match_id))

    }

    while(participant_ids.length != 0){
      const particpant1 = participantRandom();
      const particpant2 = participantRandom();
      
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
      return { body: { message: "Erro ao criar round" }, statusCode: 500 }

    }

    return { body: { round }, statusCode: 200 }
  }
}


