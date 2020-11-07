import {ServiceMatch} from '../template/match'
import {ResultMatch, PostResult} from '../template/interfaces'
import User from '../../../models/user/user';
import {getRepository} from 'typeorm'
import Participant from '../../../models/participant/participant';




class PlayoffMatchService extends ServiceMatch{
    
    public async getMatch(id: string):Promise<ResultMatch>{

            const match = await this.matchRepository.findOne(id,{ relations: ['participant1_id','participant2_id']})
            if(typeof(match)!= 'undefined'){
                console.log("------------------match=-----------")

                const participant1 = {id: match.participant1_id.id, name: match.participant2_id.players}
                const participant2 = { id: match.participant2_id.id, name: match.participant2_id.players}

                return {
                    match_id: match.id,
                    player1: participant1,
                    player2: participant2,
                    status: match.status,
                    score:match.score,
                    // winner: match.participant_winner_id,
                    statusCode: 200
                }
            }else{
                return {
                    statusCode:500
                }
            }
    }

    public async addResult(match_id:string, score:string, winner_id:string):Promise<PostResult>{
        const participantRepository = getRepository(Participant);

            let match = await this.matchRepository.findOne(match_id);
            const participant = await participantRepository.findOne(winner_id);

            if(typeof(match)!= 'undefined' && typeof(participant)!='undefined'){
                // const participant = new participant();
                match.score = score;
                match.participant_winner_id = participant;
                match.status = 'F'

                try {
                    await this.matchRepository.save(match)

                    return {message: "Resultado adicionado com sucesso!", statusCode: 200}
                    
                } catch (error) {
                    return {message: "Erro ao salvar!", statusCode: 500}   
                }

            }

            return {message: "Erro ao adicionar resultado", statusCode: 500}
    }


    public async setState(match_id:string, status:string):Promise<PostResult>{
        let match = await this.matchRepository.findOne(match_id);
        
        if(typeof(match)!= 'undefined'){
            match.status = status
            try {
                await this.matchRepository.save(match)
                
            } catch (error) {
                return {message: "Erro ao salvar!",statusCode: 500}
            }
            return {message: "Status adicionado com sucesso!",statusCode: 200}
        }
        return {message: "Error!",statusCode: 500}

    }

}

export default PlayoffMatchService;