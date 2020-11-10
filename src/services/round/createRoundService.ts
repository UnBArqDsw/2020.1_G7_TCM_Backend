/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'
import { Result } from '../protocols/IServices'
import Round from '../../models/round/round'
import Matchs from '../../models/match/match'

export class CreateRoundService {
  public async execute(name: string, status: boolean): Promise<Result> {
    const roundRepository = getRepository(Round)
    const matchRepository = await getRepository(Matchs)
    let match = new Matchs()

    match = await matchRepository.findOne(
      '79014fc8-2dd5-491a-ba78-8cae12c5bef2',
    )
    try {
      let round = new Round()
      round.name = name
      round.status = status
      round.matchs_ids = [match.id,match.id]
      const round_aux = await roundRepository.save(round)

    } catch (error) {
      console.log(error)
    }

    // match.round_id =

    return { body: { round }, statusCode: 200 }
  }
}
