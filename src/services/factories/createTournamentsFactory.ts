import { ServiceCreator } from '../creator/serviceCreator'
import { Service } from '../protocols/IServices'
import { CreatePlayoff } from '../tournaments/createPlayoff'

export class CreateTournamentFactoryPlayoff extends ServiceCreator {
  public factoryMethod(): Service {
    return new CreatePlayoff()
  }
}
