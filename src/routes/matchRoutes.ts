import { Router } from 'express'
import CreateFriendlyMatchController from '../controllers/match/createMatchController'
import {
  PlayoffGetMatchController,
  PlayoffGetAddResultController,
  PlayoffAddStatusController,
} from '../controllers/match/playoffControllers'
import {
  FliendlyAddResultController,
  FliendlyAddStatusController,
  FliendlyGetMatchController,
} from '../controllers/match/friendlyMatchController'

import userAuth from '../middlewares/userAuth'

const matchRoutes = Router()

matchRoutes.post('/friendly', async (request, response) => {
  const match = new CreateFriendlyMatchController()
  await match.handle(request, response)
})

matchRoutes.get('/friendly/:id', async (request, response) => {
  const match = new FliendlyGetMatchController()
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
