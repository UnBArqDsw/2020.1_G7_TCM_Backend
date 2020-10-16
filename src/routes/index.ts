import { Router } from 'express'

import userRoutes from './userRoutes'
import tournamentRoutes from './tournamentRoutes'

const routes = Router()

routes.use(userRoutes)
routes.use(tournamentRoutes)

export default routes
