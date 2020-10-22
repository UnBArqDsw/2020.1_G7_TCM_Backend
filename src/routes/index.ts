import { Router } from 'express'

import userRoutes from './userRoutes'
import tournamentRoutes from './tournamentRoutes'
import sessionRoutes from './sessionRoutes'

const routes = Router()

routes.use(userRoutes)
routes.use(tournamentRoutes)
routes.use(sessionRoutes)

export default routes
