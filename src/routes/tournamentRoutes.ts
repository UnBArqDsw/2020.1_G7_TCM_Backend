import { Router } from 'express'
import { CreateTournamentController } from '../controllers/tournament/createTournamentController'
import userAuth from '../middlewares/userAuth'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', userAuth, (request, response) => {
  response.json({ message: 'tournaments' })
})

tournamentRoutes.post('/tournament', userAuth, (request, response) => {
  const createTournament = new CreateTournamentController()
  createTournament.handle(request, response)
})

export default tournamentRoutes
