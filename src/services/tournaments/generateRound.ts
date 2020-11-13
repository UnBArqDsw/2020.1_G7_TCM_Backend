/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { Result, Service } from '../protocols/IServices'

export class GenerationRound implements Service {
  public async execute(request: Request): Promise<Result> {
    const tournament = request.params
    const { players } = request.body

    return { body: { tournament, players }, statusCode: 200 }
  }
}
