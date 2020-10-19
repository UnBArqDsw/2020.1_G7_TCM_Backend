/* eslint-disable no-restricted-syntax */
import { getRepository } from 'typeorm'

import { hash } from 'bcryptjs'
import User from '../../models/user/user'
import AppError from '../../errors/appError'

interface Request {
  name: string
  nickname: string
  email: string
  password: string
  birthday: Date
  level: string
  passwordConfirmation: string
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    nickname,
    birthday,
    level,
    passwordConfirmation,
  }: Request): Promise<User> {
    if (!name) {
      throw new AppError('Nome não preenchido')
    }

    if (!email) {
      throw new AppError('Email não preenchido')
    }

    if (!password) {
      throw new AppError('Senha não preenchido')
    }

    if (!passwordConfirmation) {
      throw new AppError('Confirmação de senha não preenchido')
    }

    if (!nickname) {
      throw new AppError('Nickname não preenchido')
    }

    if (!birthday) {
      throw new AppError('Data de nascimento não preenchido')
    }

    if (!level) {
      throw new AppError('Nível não preenchido')
    }

    if (password !== passwordConfirmation) {
      throw new AppError('Senhas não coincidem')
    }

    const userRepository = getRepository(User)

    const checkEmailExistence = await userRepository.findOne({
      where: { email },
    })

    const checkNicknameExistence = await userRepository.findOne({
      where: { nickname },
    })

    if (checkEmailExistence) {
      throw new AppError('Email já utilizado, escolha outro.')
    }

    if (checkNicknameExistence) {
      throw new AppError('Nickname já utilizado, escolha outro.')
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
