/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { getRepository } from 'typeorm'
import { Result, Service } from '../protocols/IServices'
import AppError from '../../errors/appError'
import Participant from '../../models/participant/participant'

export class CreateParticipant implements Service {
  public async execute(request: Request): Promise<Result> {
    // const manager: string = request.body.id
    // console.log(request.body);
    const {
        status,
        players,
        participant_type
    } = request.body
    

    const requiredFields = [
        'status',
        'players',
        'participant_type'
    ]

    for (const fields of requiredFields) {
      if (!request.body[fields]) {
        throw new AppError(`Missing Param: ${fields}`)
      }
    }

    const participantRepository = getRepository(Participant)

    const participant = participantRepository.create({
        status,
        players,
        participant_type
    })
    try {
        await participantRepository.save(participant)
        
    } catch (error) {
        console.log(error)
    }
   
    return { body: { participant }, statusCode: 200 }
  }
}
