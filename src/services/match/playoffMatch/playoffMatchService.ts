import {ServiceMatch} from '../template/match'
import {ResultMatch, PostResult} from '../template/interfaces'
import User from '../../../models/user/user';
import {getRepository} from 'typeorm'




class PlayoffMatchService extends ServiceMatch{
    
    public async getMatch(id: string):Promise<ResultMatch>{

            const match = await this.matchRepository.findOne(id);
            if(typeof(match)!= 'undefined'){
                return {
                    match_id: match.id,
                    player1: String(match.participant1_id),
                    player2: String(match.participant2_id),
                    status: match.status,
                    score:match.score,
                    statusCode: 200
                }
            }else{
                return {
                    statusCode:500
                }
            }
    }

    public async addResult(match_id:string, score:string, winner_id:string):Promise<PostResult>{
        const userRepository = getRepository(User);

            let match = await this.matchRepository.findOne(match_id);
            const user = await userRepository.findOne(winner_id);

            if(typeof(match)!= 'undefined' && typeof(user)!='undefined'){
                const user = new User();
                match.score = score;
                match.winner_id = user
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