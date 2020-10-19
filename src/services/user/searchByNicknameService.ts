import { getRepository } from 'typeorm'
import User from '../../models/user/user'
import AppError from '../../errors/appError'

interface Result {
  nickname?: string
  name: string
}

class SearchByNicknameService {
  public async execute(nickname: string): Promise<Result> {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ where: { nickname } })
    if (!user) {
      throw new AppError('Usuário não encontado', 400)
    }
    return {
      name: user.name,
      nickname: user.nickname,
    }
  }
}

export default SearchByNicknameService
