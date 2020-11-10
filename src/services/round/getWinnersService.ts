/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'
import { Result } from '../protocols/IServices'
import Round from '../../models/round/round'
import PlayoffMatchService from '../match/playoffMatch/playoffMatchService'

export class GetWinnersService {
  public async execute(round_id: string): Promise<Result> {
    const roundRepository = getRepository(Round)
    const winners = []

    let round = new Round()

    round = await roundRepository.findOne(round_id)
    const matchService = new PlayoffMatchService()

    try {
      for (const match in round.matchs_ids) {
        const result = await matchService.getMatch(round.matchs_ids[match])
        winners.push(result.winner)
      }
    } catch (error) {
      return {
        body: { message: 'Erro ao buscar ganhadores do round.' },
        statusCode: 500,
      }
    }

    return { body: { winners }, statusCode: 200 }
  }
}
