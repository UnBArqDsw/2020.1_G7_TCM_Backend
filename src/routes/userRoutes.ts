import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/user', (request, response) => {
  response.json({ message: 'hello user' })
})

export default userRoutes
