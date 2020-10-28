import { Router } from 'express'
import CreateParticipantController from '../controllers/participant/createParticipantController'
import SearchParticipantController from '../controllers/participant/searchParticipantController'
import UpdateParticipantController from '../controllers/participant/updateParticipantController'
import userAuth from '../middlewares/userAuth'

const participantController = Router()

participantController.get('/participant/:id', async (request, response) => {
  const searchParticipant = new SearchParticipantController()
  await searchParticipant.handle(request, response)
})

participantController.post('/participant', async (request, response) => {
  const createParticipant = new CreateParticipantController()
  await createParticipant.handle(request, response)
})

participantController.post('/participant/:id', async (request, response) => {
  const updateParticipant = new UpdateParticipantController()
  await updateParticipant.handle(request, response)
})

export default participantController
