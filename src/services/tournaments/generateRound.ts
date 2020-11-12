/* eslint-disable no-restricted-syntax */
import { Request } from 'express'
import { Result, Service } from '../protocols/IServices'

class GenerationRound implements Service {
  public async execute(request: Request): Promise<Result> {}
}

export default GenerationRound
