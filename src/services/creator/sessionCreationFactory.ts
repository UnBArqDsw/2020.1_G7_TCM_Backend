import { Service } from '../protocols/services'
import CreateSessionService from '../session/createSessionService'
import { ServiceCreator } from './serviceCreator'

export class SessionFactory extends ServiceCreator {
  public factoryMethod(): Service {
    return new CreateSessionService()
  }
}
