/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import Matchs from '../match/match'

@Entity('rounds')
class Round {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  status: boolean

  @Column()
  name: string

  @OneToMany(() => Matchs, match => match.round_id)
  matchs_ids: Matchs[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Round
