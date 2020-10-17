import { Request, Response } from 'express'

class TournamentController {
  createTournament(request: Request, response: Response) {
    try {
      response.status(200).json({ msg: 'torneio criado' })
    } catch (error) {
      response.status(400).json({ msg: 'Bad Request' })
    }
  }
}
export default new TournamentController()
