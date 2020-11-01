/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express'

export interface Result {
  body: any
  statusCode: number
}

export interface ResultMatch {
  match_id?: string
  tournament_id?: string
  player1?: string
  player2?: string
  status: boolean
}

export interface Service {
  execute(request: Request): Promise<Result>
}
