import { Router } from 'express'
import CreateParticipantController from '../controllers/participant/createParticipantController'
import SearchParticipantController from '../controllers/participant/searchParticipantController'
import userAuth from '../middlewares/userAuth'

const participantController = Router()

// participantController.get('/participant', userAuth, (request, response) => {
//   response.json({ message: 'participant' })
// })

participantController.get('/participant/:id', async (request, response) => {
  const searchParticipant = new SearchParticipantController()
  await searchParticipant.handle(request, response)
})

participantController.post('/participant', async (request, response) => {
  const createParticipant = new CreateParticipantController()
  await createParticipant.handle(request, response)
})

export default participantController
