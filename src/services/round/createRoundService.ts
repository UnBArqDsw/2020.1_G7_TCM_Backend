/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Round from '../../models/round/round'

export class CreateRoundService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { name, status } = request.body

    const requiredFields = ['name', 'status']

    for (const fields of requiredFields) {
      if (!request.body[fields]) {
        throw new AppError(`Missing Param: ${fields}`)
      }
    }

    const roundRepository = getRepository(Round)

    const round = roundRepository.create({
      name,
      status,
    })

    await roundRepository.save(round)

    return { body: { round }, statusCode: 200 }
  }
}
