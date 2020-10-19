import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import AppError from '../../errors/appError'
import User from '../../models/user/user'

interface Session {
  email: string
  token?: string
  id: any
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
    const token = sign({}, 'f295eb52d82423b1621a837193c98471', {
      expiresIn: '7d',
      subject: user.id,
    })

    return { email, token, id: user.id }
  }
}

export default new CreateSessionService()
