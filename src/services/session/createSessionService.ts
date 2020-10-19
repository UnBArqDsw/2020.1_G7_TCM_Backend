import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import AppError from '../../errors/appError'
import User from '../../models/user/user'

interface Session {
  email: string
  token?: string
}

class CreateSessionService {
  public async execute(email: string, password: string): Promise<Session> {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ where: { email } })
    if (!user) {
      throw new AppError('Email ou senha inválidos', 401)
    }
    const checkPassword = await compare(password, user.password)

    if (!checkPassword) {
      throw new AppError('Email ou senha inválidos', 401)
    }

    return { email }
  }
}

export default new CreateSessionService()
