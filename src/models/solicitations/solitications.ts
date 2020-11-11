/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import Tournaments from '../tournament/tournament'

import User from '../user/user'

@Entity('solicitations')
class Solicitations {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  user: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'user' })
  user_id: User

  @ManyToOne(type => Tournaments, solicitations => Solicitations, {
    eager: true,
  })
  tournament: Tournaments
}

export default Solicitations
