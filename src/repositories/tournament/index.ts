import { EntityRepository, Repository } from 'typeorm'
import Tournaments from '../../models/tournament/tournament'

@EntityRepository(Tournaments)
class TournamentRepository extends Repository<Tournaments> {
  findByName(name: string) {
    return this.findOne({ name })
  }
}

export default TournamentRepository
