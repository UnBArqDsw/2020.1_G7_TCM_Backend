import { Router } from 'express'
import tournamentController from '../controllers/tournament/index'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', (request, response) => {
  response.json({ message: 'tournaments' })
})

tournamentRoutes.post('/tournament', (request, response) => {
  tournamentController.createTournament(request, response)
})

export default tournamentRoutes
