import {ResultMatch, PostResult} from './interfaces'
import { getRepository } from 'typeorm';
import Matchs from '../../../models/match/match';


export abstract class ServiceMatch{
    matchRepository = getRepository(Matchs);

    public async getMatch( id:string ):Promise<ResultMatch>{
        const match = {
            match_id: "",
            tournament_id: "",
            player1: "",
            player2: "",
            status: ""
        }
        return match;
    }
    public async addResult(id:string, score:string, winner_id:string):Promise<PostResult>{
        const result = {message:"Sucesso",statusCode: 200}
        return result;
    }

    public async setState(match_id:string, status:string):Promise<PostResult>{
        const result = {message:"Sucesso",statusCode: 200}
        return result;
    }

}