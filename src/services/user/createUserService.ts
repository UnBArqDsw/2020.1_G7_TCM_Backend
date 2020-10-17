import { getRepository } from 'typeorm'

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
  }: Request): Promise<void> {
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

    const user = userRepository.create({
      name,
      password,
      email,
      level,
      birthday,
      nickname,
    })

    await userRepository.save(user)
  }
}
export default CreateUserService
