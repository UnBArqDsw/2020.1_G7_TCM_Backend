import { Router, Request, Response } from 'express'
import { CreateRoundController } from '../controllers/round/createRoundController'
import { ListMatchsRoundController } from '../controllers/round/listMatchsRoundController'
import userAuth from '../middlewares/userAuth'

const roundRoutes = Router()

roundRoutes.post(
  '/round',
  async (request: Request, response: Response) => {
    const CreateRound = new CreateRoundController()
    await CreateRound.handle(request, response)
  },
)

roundRoutes.get(
  '/round/:id',
  async (request: Request, response: Response) => {
    const list = new ListMatchsRoundController()
    await list.handle(request, response)
  },
)

export default roundRoutes
