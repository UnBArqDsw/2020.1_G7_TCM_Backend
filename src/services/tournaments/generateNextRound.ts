/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository, Any } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import Tournaments from '../../models/tournament/tournament'
import { CreateRoundService } from '../round/createRoundService'
import { GetWinnersService } from '../round/getWinnersService'

export class GenerationNextRound implements Service {
  public async execute(request: Request): Promise<Result> {
    const id = request.params
    const name = request.body
    const tournamentRepository = getRepository(Tournaments)
    const tournament = await tournamentRepository.findOne({
      where: id,
    })

    const round_list = tournament.rounds
    let tamanho = 0
    for (const i in round_list) {
      tamanho += 1
    }
    if (tamanho != 0) {
      const ultimo_round = round_list[tamanho - 1]
      const getWinners = new GetWinnersService()
      const winners = await getWinners.execute(ultimo_round.id)
      if (winners.body === []) {
        return {
          body: { message: 'Ainda existe partidas sem ganhadores' },
          statusCode: 500,
        }
      }
      const createRound = new CreateRoundService()
      const round = await createRound.execute(name, true, winners.body)
      return { body: round, statusCode: 200 }
    }

    return { body: 'nada', statusCode: 400 }
  }
}
