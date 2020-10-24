import { Router } from 'express'

import userRoutes from './userRoutes'
import tournamentRoutes from './tournamentRoutes'
import sessionRoutes from './sessionRoutes'
import roundRoutes from './roundRoutes'

const routes = Router()

routes.use(userRoutes)
routes.use(tournamentRoutes)
routes.use(sessionRoutes)
routes.use(roundRoutes)

export default routes
