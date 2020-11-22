/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Tournaments from '../../models/tournament/tournament'

export class GetTournamentByIdService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { id } = request.user
    const { tournamentId } = request.params

    const playoffRepository = getRepository(Tournaments)

    const tournament = await playoffRepository.findOne({
      where: { manager: id, id: tournamentId },
    })

    if (!tournament) {
      throw new AppError('Not found Tournaments ')
    }

    return { body: { tournament }, statusCode: 200 }
  }
}
