import { Router, Request, Response } from 'express'
import { CreateRoundController } from '../controllers/round/createRoundController'
import userAuth from '../middlewares/userAuth'

const roundRoutes = Router()

roundRoutes.post(
  '/round',
  userAuth,
  async (request: Request, response: Response) => {
    const CreateRound = new CreateRoundController()
    await CreateRound.handle(request, response)
  },
)

export default roundRoutes
