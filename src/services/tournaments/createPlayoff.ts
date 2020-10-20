import { Request } from 'express'
import { Result, Service } from '../protocols/IServices'

export class CreatePlayoff implements Service {
  async execute(_: Request): Promise<Result> {
    const a = 'oi'
    return {
      body: a,
      statusCode: 200,
    }
  }
}
