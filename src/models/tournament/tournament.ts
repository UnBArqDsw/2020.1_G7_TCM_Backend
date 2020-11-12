/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import Participant from '../participant/participant'
import Solicitations from '../solicitations/solitications'

import User from '../user/user'

@Entity('tournaments')
class Tournaments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  type: string

  @Column()
  rules: string

  @Column()
  players_quantity: number

  @Column()
  start_date: Date

  @Column()
  end_date: Date

  @OneToMany(() => Solicitations, solicitation => solicitation.tournaments, {
    nullable: true,
  })
  solicitations: Solicitations[]

  @OneToMany(() => Participant, participant => participant.tournaments, {
    nullable: true,
  })
  participants: Participant[]

  @ManyToOne(() => User, user => user.id)
  manager: User

  // @OneToMany(type => Solicitations, tournament => Tournaments, {
  //   nullable: true,
  //   eager: true,
  // })
  // solicitations: Solicitations[]

  @Column()
  estado: string

  @Column()
  cidade: string

  @Column('varchar', { array: true, nullable: true })
  rounds_ids: string[]

  @Column()
  endereco: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Tournaments
