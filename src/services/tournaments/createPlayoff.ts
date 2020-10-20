/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Tournaments from '../../models/tournament/tournament'

export class CreatePlayoff implements Service {
  public async execute(request: Request): Promise<Result> {
    const manager: string = request.user.id
    const solicitation: string[] = [request.user.id]
    const {
      name,
      description,
      type,
      rules,
      players_quantity,
      start_date,
      end_date,
      state,
      cidade,
      endereco,
    } = request.body

    const requiredFields = [
      'name',
      'description',
      'type',
      'rules',
      'players_quantity',
      'start_date',
      'end_date',
      'state',
      'cidade',
      'endereco',
    ]

    for (const fields of requiredFields) {
      if (!request.body[fields]) {
        throw new AppError(`Missing Param: ${fields}`)
      }
    }

    const playoffRepository = getRepository(Tournaments)

    const playoff = playoffRepository.create({
      name,
      description,
      type,
      rules,
      players_quantity,
      start_date,
      end_date,
      state,
      cidade,
      endereco,
      manager,
      solicitation,
    })

    console.error()

    await playoffRepository.save(playoff)
    return { body: { playoff }, statusCode: 200 }
  }
}
