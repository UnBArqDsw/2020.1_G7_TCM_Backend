import { Router } from 'express'

const tournamentRoutes = Router()

tournamentRoutes.get('/tournament', (request, response) => {
  response.json({ message: 'tournaments' })
})

export default tournamentRoutes
