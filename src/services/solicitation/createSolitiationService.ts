/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import AppError from '../../errors/appError'
import Solicitations from '../../models/solicitations/solitications'
import { Result, Service } from '../protocols/IServices'

class CreateSolicitationService implements Service {
  public async execute(request: Request): Promise<Result> {
    const solicittionRepository = getRepository(Solicitations)

    const { id } = request.user
    const { tournament } = request.params

    const solicitation = await solicittionRepository.create({
      user: id,
      tournament,
    })

    try {
      await solicittionRepository.save(solicitation)
    } catch (err) {
      throw new AppError(err)
    }
    return {
      body: {
        solicitation,
      },
      statusCode: 200,
    }
  }
}

export default CreateSolicitationService
