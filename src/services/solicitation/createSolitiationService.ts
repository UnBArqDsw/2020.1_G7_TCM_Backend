/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import AppError from '../../errors/appError'
import Tournaments from '../../models/tournament/tournament'
import User from '../../models/user/user'
import { Result, Service } from '../protocols/IServices'

class CreateSolicitationService implements Service {
  public async execute(request: Request): Promise<Result> {
    const playoffRepository = getRepository(Tournaments)

    const { tournamentId } = request.params
    const { id } = request.user

    const checkTournamentExists = await playoffRepository.findOne({
      where: {
        id: tournamentId,
      },
    })

    console.log(checkTournamentExists)

    if (!checkTournamentExists) {
      throw new AppError('Torneio inexistente')
    }

    try {
      const createSolicitation = playoffRepository.update(tournamentId, {
        solicitation: id,
      })
    } catch (error) {
      console.log(error)
    }

    return {
      body: {
        id,
        tournamentId,
      },
      statusCode: 200,
    }
  }
}

export default CreateSolicitationService
