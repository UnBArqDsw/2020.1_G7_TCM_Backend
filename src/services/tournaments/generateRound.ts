/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import Tournaments from '../../models/tournament/tournament'
import { CreateRoundService } from '../round/createRoundService'

export class GenerationRound implements Service {
  public async execute(request: Request): Promise<Result> {
    const id = request.params
    const name = request.body
    const tournamentRepository = getRepository(Tournaments)
    const tournament = await tournamentRepository.findOne({
      where: id,
    })
    const players = tournament.participants

    const player_id = []
    for (const player in players) {
      // console.log()
      player_id.push(players[player].id)
    }
    // console.log(player_id)
    // console.log(ids)
    // console.log(players)
    // const players = [
    //   '642b013f-da49-4d36-b0a2-c9dfb554595a',
    //   '96e7a0a4-16e4-4cdd-8695-abccf8b026aa',
    // ]
    // const num_players = players.length
    const createRound = new CreateRoundService()

    const round = await createRound.execute(name, true, player_id)
    return { body: { round, players }, statusCode: 200 }
  }
}
