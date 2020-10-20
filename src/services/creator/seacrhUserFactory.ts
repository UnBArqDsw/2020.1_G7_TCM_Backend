import { Service } from '../protocols/services'
import SearchByNicknameService from '../user/searchByNicknameService'
import { ServiceCreator } from './serviceCreator'

export class SearchUserFactory extends ServiceCreator {
  public factoryMethod(): Service {
    return new SearchByNicknameService()
  }
}
