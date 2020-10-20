import { Router } from 'express'
import { CreateTournamentController } from '../controllers/tournament/createTournamentController'
import userAuth from '../middlewares/userAuth'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', userAuth, (request, response) => {
  response.json({ message: 'tournaments' })
})

tournamentRoutes.post('/tournament', userAuth, async (request, response) => {
  const createTournament = new CreateTournamentController()
  await createTournament.handle(request, response)
})

export default tournamentRoutes
