import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import AppError from '../errors/appError'
import Tournaments from '../models/tournament/tournament'

export default async function managerAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  try {
    const { id } = request.user

    const tournament_id = request.params.id

    if (!id) {
      throw new AppError('id não encontrado', 401)
    }

    const tournamentRepository = getRepository(Tournaments)

    const manager = await tournamentRepository.findOne({
      where: { id: tournament_id, manager: id },
    })
    console.log(manager)
    if (manager.manager.id === id) {
      return next()
    }
    return next('/')
  } catch {
    throw new AppError('Você não é gerente deste torneio', 401)
  }
}
