import { NextFunction, Request, Response } from 'express'
import AppError from '../errors/appError'

export default function userAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const token = request.headers.authorization

  if (!token) {
    throw new AppError('Token Invalido', 401)
  }

  next()
}
