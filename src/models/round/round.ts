/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
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

  @Column('varchar', { array: true })
  matchs_ids: string[]


  // @OneToMany(() => Matchs, match => match.id)
  // @JoinColumn({ name: 'matchs_ids' })
  // matchs_id: string

  

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Round
