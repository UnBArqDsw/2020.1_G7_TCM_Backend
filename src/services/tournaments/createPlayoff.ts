/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'

export class CreatePlayoff implements Service {
  async execute(request: Request): Promise<Result> {
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

    return { body: { name, description }, statusCode: 200 }
  }
}
