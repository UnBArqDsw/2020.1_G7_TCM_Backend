/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import AppError from '../../errors/appError'
import Participant from '../../models/participant/participant'
import Solicitations from '../../models/solicitations/solitications'
import Tournaments from '../../models/tournament/tournament'
import User from '../../models/user/user'
import { Result, Service } from '../protocols/IServices'

class AcceptSolicitationService implements Service {
  public async execute(request: Request): Promise<Result> {
    const userRepository = getRepository(User)
    const tournamentRepository = getRepository(Tournaments)
    const solicittionRepository = getRepository(Solicitations)
    const participantRepository = getRepository(Participant)

    const { id } = request.user
    const { tournament } = request.params
    const { requester } = request.body

    const solicitationExists = await solicittionRepository.findOne({
      where: { user: requester, tournaments: tournament },
    })

    if (!solicitationExists) {
      throw new AppError('Solicitação não existente', 400)
    }

    const isManager = await tournamentRepository.findOne({
      where: { id: tournament, manager: id },
    })

    if (!isManager) {
      throw new AppError('Não autorizado', 401)
    }

    const userExists = await userRepository.findOne({
      where: { id: requester },
    })

    if (!userExists) {
      throw new AppError('Usuário não existe', 400)
    }

    const createParticipant = await participantRepository.create({
      players: requester,
      status: true,
      tournaments: tournament,
      participant_type: 's',
    })

    try {
      await participantRepository.save(createParticipant)
    } catch (err) {
      throw new AppError(err, 400)
    }

    return {
      body: {
        id,
        tournament,
        requester,
      },
      statusCode: 200,
    }
  }
}

export default AcceptSolicitationService
