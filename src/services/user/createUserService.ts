/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'

import { hash } from 'bcryptjs'
import User from '../../models/user/user'

interface Request {
  name: string
  nickname: string
  email: string
  password: string
  birthday: Date
  level: string
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    nickname,
    birthday,
    level,
  }: Request): Promise<User> {
    if (!name || !email || !password || !nickname || !birthday || !level) {
      throw new Error('Preencha todos os campos')
    }
    const userRepository = getRepository(User)

    const checkEmailExistence = await userRepository.findOne({
      where: { email },
    })

    const checkNicknameExistence = await userRepository.findOne({
      where: { nickname },
    })

    if (checkEmailExistence) {
      throw new Error('Email já utilizado, escolha outro.')
    }

    if (checkNicknameExistence) {
      throw new Error('Nickname já utilizado, escolha outro.')
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      password: passwordHash,
      email,
      level,
      birthday,
      nickname,
    })

    await userRepository.save(user)

    return user
  }
}
export default CreateUserService
