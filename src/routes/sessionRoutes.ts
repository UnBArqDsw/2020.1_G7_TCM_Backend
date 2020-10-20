import { Router, Request, Response } from 'express'
import SessionController from '../controllers/session/index'

const sessionRoutes = Router()

sessionRoutes.post('/session', async (request: Request, response: Response) => {
  await SessionController.createSession(request, response)
})

export default sessionRoutes
