/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Round
