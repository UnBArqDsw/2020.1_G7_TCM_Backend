import { Router } from 'express'
import userAuth from '../middlewares/userAuth'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', userAuth, (request, response) => {
  response.json({ message: 'tournaments' })
})

export default tournamentRoutes
