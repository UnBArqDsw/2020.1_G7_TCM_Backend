import { Request } from 'express'
import { getRepository } from 'typeorm'
import Participant from '../../models/participant/participant'
import { Result, Service } from '../protocols/IServices'

class updateParticipantStatusService implements Service {
  public async execute(request: Request): Promise<Result> {
    const { id, status } = request.body

    const participantRepository = getRepository(Participant)

    const current_status = await participantRepository.findOne({ id })
    current_status.status = status

    try {
      await participantRepository.save(current_status)
    } catch (error) {
      console.log(error)
    }

    return {
      statusCode: 200,
    }
  }
}

export default updateParticipantStatusService
