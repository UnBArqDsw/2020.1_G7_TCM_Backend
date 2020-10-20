import { Service } from '../protocols/services'
import CreateUserService from '../user/createUserService'
import { ServiceCreator } from './serviceCreator'

export class CreateUserFactory extends ServiceCreator {
  public factoryMethod(): Service {
    return new CreateUserService()
  }
}
