/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { ResultMatch } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Matchs from '../../models/match/match'
import Tournaments from '../../models/tournament/tournament'
import Participant from '../../models/participant/participant'


class CreateMatchService {
  public async execute(tournament_id:string, id_palyer_1:string, id_palyer_2:string): Promise<ResultMatch> {

    const tournamentRepository = getRepository(Tournaments);
    const participantRepository = getRepository(Participant);

    const tournament_aux = await tournamentRepository.findOne(tournament_id);
    const player1_aux = await participantRepository.findOne(id_palyer_1);
    const player2_aux = await participantRepository.findOne(id_palyer_2);

    if(typeof(tournament_aux)!= 'undefined'  && typeof(player1_aux) != 'undefined' && typeof(player2_aux) != 'undefined'){
        console.log("Chegou1")
        
        let tournament = new Tournaments();
        let player_1 = new Participant();
        let player_2 = new Participant();

        tournament = tournament_aux;
        player_1 = player1_aux;
        player_2 = player2_aux;
        

        let match_aux = new Matchs();
        match_aux.tournament_id = tournament.id;
        match_aux.participant1_id = player_1.id;
        match_aux.participant2_id = player_2.id;
        match_aux.status = 'C'
        
        const matchRepository = getRepository(Matchs);
        
        try {
            console.log(match_aux)
            const match = matchRepository.create(match_aux);
            await matchRepository.save(match);
            return {
                match_id: match.id,
                tournament_id: tournament_id,
                player1: player_1.id,
                player2: player_2.id,
                status: true 
            } 
            
        } catch (error) {
            throw new AppError('Create Match error.', 500)
        }

    }


    return { status: false  }
  }
}

export default CreateMatchService;