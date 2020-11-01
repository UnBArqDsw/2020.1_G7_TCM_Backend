import { Router } from 'express'
import CreateFriendlyMatchController from '../controllers/match/createMatchController'
import userAuth from '../middlewares/userAuth'

const matchRoutes = Router()

matchRoutes.post('/friendly', async (request, response) => {
  const match = new CreateFriendlyMatchController()
  await match.handle(request, response)
})


export default matchRoutes