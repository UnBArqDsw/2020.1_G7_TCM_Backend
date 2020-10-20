import { getRepository } from 'typeorm'
import { Request } from 'express'
import User from '../../models/user/user'
import AppError from '../../errors/appError'
import { Result, Service } from '../protocols/services'

class SearchByNicknameService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { nickname } = request.params
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ where: { nickname } })
    if (!user) {
      throw new AppError('User not found', 400)
    }
    const { name, id } = user
    return {
      body: { id, name, nickname: user.nickname },
      statusCode: 200,
    }
  }
}

export default SearchByNicknameService
