import { getRepository } from 'typeorm'
import { ServiceMatch } from '../template/match'
import { ResultMatch, PostResult } from '../template/interfaces'
import Participant from '../../../models/participant/participant'
import User from '../../../models/user/user'

class PlayoffMatchService extends ServiceMatch {
  public async getMatch(id: string): Promise<ResultMatch> {
    const match = await this.matchRepository.findOne(id)

    const userRepository = getRepository(User)
    const partcipantRepository = getRepository(Participant)

    if (typeof match !== 'undefined') {
      const participant1_id = await partcipantRepository.findOne({
        where: { id: match.participant1_id },
      })

      const name = await userRepository.findOne({
        where: { id: participant1_id?.players },
      })
      const participant1 = {
        id: participant1_id,
        name: name?.name,
      }
      const participant2_id = await partcipantRepository.findOne({
        where: { id: match.participant2_id },
      })

      const name2 = await userRepository.findOne({
        where: { id: participant2_id?.players },
      })
      const participant2 = {
        id: participant2_id,
        name: name2?.name,
      }

      return {
        match_id: match.id,
        player1: participant1,
        player2: participant2,
        status: match.status,
        score: match.score,
        winner:
          match.participant_winner_id == null
            ? ''
            : match.participant_winner_id,
        statusCode: 200,
      }
    }
    return {
      statusCode: 500,
    }
  }

  public async addResult(
    match_id: string,
    score: string,
    winner_id: string,
  ): Promise<PostResult> {
    const participantRepository = getRepository(Participant)

    const match = await this.matchRepository.findOne(match_id)
    const participant = await participantRepository.findOne(winner_id)

    if (typeof match !== 'undefined' && typeof participant !== 'undefined') {
      match.score = score
      match.participant_winner_id = participant.id
      match.status = 'F'

      try {
        await this.matchRepository.save(match)

        return { message: 'Resultado adicionado com sucesso!', statusCode: 200 }
      } catch (error) {
        return { message: 'Erro ao salvar!', statusCode: 500 }
      }
    }

    return { message: 'Erro ao adicionar resultado', statusCode: 500 }
  }

  public async setState(match_id: string, status: string): Promise<PostResult> {
    const match = await this.matchRepository.findOne(match_id)

    if (typeof match !== 'undefined') {
      match.status = status
      try {
        await this.matchRepository.save(match)
      } catch (error) {
        return { message: 'Erro ao salvar!', statusCode: 500 }
      }
      return { message: 'Status adicionado com sucesso!', statusCode: 200 }
    }
    return { message: 'Error!', statusCode: 500 }
  }
}

export default PlayoffMatchService
