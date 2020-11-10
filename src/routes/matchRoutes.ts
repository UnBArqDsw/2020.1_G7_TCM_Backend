import { Router } from 'express'
import CreateFriendlyMatchController from '../controllers/match/createMatchController'
import { PlayoffAddStatusController } from '../controllers/match/playoffControllers'
import {
  FliendlyAddResultController,
  FliendlyAddStatusController,
} from '../controllers/match/friendlyMatchController'
import { PlayoffGetMatchController } from '../controllers/match/searchPlayoffMatch'
import { PlayoffGetAddResultController } from '../controllers/match/addResultMatch'
import { FriendlyGetMatchController } from '../controllers/friendlymatch/searchFriendlyMatch'

const matchRoutes = Router()

matchRoutes.post('/friendly', async (request, response) => {
  const match = new CreateFriendlyMatchController()
  await match.handle(request, response)
})

matchRoutes.get('/friendly/:id', async (request, response) => {
  const match = new FriendlyGetMatchController()
  await match.handle(request, response)
})

matchRoutes.post('/friendly/add/match/result', async (request, response) => {
  const match = new FliendlyAddResultController()
  await match.handle(request, response)
})

matchRoutes.post('/friendly/add/match/status', async (request, response) => {
  const match = new FliendlyAddStatusController()
  await match.handle(request, response)
})

// Playoff rotas
matchRoutes.get('/playoff/:id', async (request, response) => {
  const match = new PlayoffGetMatchController()
  await match.handle(request, response)
})

matchRoutes.post('/playoff/add/match/result', async (request, response) => {
  const match = new PlayoffGetAddResultController()
  await match.handle(request, response)
})

matchRoutes.post('/playoff/add/match/status', async (request, response) => {
  const match = new PlayoffAddStatusController()
  await match.handle(request, response)
})

export default matchRoutes
