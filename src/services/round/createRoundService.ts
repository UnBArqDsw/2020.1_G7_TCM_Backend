/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'
import { Result } from '../protocols/IServices'
import Round from '../../models/round/round'

export class CreateRoundService {
  public async execute(name: string, status: boolean): Promise<Result> {
    const roundRepository = getRepository(Round)

    const round = roundRepository.create({
      name,
      status,
    })

    await roundRepository.save(round)

    return { body: { round }, statusCode: 200 }
  }
}
