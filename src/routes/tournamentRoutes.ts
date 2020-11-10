import { Router } from 'express'
import { CreateSolitiationController } from '../controllers/solicitation/createSolicititation'
import { CreateTournamentController } from '../controllers/tournament/createTournamentController'
import { SearchTournamentController } from '../controllers/tournament/searchTournamentController'
import userAuth from '../middlewares/userAuth'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', userAuth, async (request, response) => {
  const tournament = new SearchTournamentController()
  await tournament.handle(request, response)
})

tournamentRoutes.post('/tournament', userAuth, async (request, response) => {
  const createTournament = new CreateTournamentController()
  await createTournament.handle(request, response)
})

tournamentRoutes.post(
  '/solicitation/:tournamentId',
  userAuth,
  async (request, response) => {
    const createSolicitation = new CreateSolitiationController()
    await createSolicitation.handle(request, response)
  },
)

export default tournamentRoutes
