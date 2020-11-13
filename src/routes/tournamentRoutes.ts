import { Router } from 'express'
import { AcceptSolitiationController } from '../controllers/solicitation/acceptSolicitation'
import { CreateSolitiationController } from '../controllers/solicitation/createSolicititation'
import { SearchSolitiationController } from '../controllers/solicitation/searchSolicititation'
import { CreateTournamentController } from '../controllers/tournament/createTournamentController'
import { SearchTournamentController } from '../controllers/tournament/searchTournamentController'
import userAuth from '../middlewares/userAuth'
import { GenerationRoundController } from '../controllers/tournament/generateRoundController'

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
  '/solicitation/:tournament',
  userAuth,
  async (request, response) => {
    const createSolicitation = new CreateSolitiationController()
    await createSolicitation.handle(request, response)
  },
)

tournamentRoutes.post(
  '/generationround/:id',
  userAuth,
  async (request, response) => {
    const generateRound = new GenerationRoundController()
    await generateRound.handle(request, response)
  },
)

tournamentRoutes.get(
  '/solicitation/:tournament',
  userAuth,
  async (request, response) => {
    const searchSolicitation = new SearchSolitiationController()
    await searchSolicitation.handle(request, response)
  },
)

tournamentRoutes.post(
  '/accept/:tournament',
  userAuth,
  async (request, response) => {
    const acceptSolicitation = new AcceptSolitiationController()
    await acceptSolicitation.handle(request, response)
  },
)

export default tournamentRoutes
