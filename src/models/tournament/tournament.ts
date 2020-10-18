/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'

import User from '../user/user'

@Entity('tournaments')
class Tournaments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToOne(() => User)
  @JoinColumn()
  manager: User

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

  @Column()
  state: string

  @Column()
  cidade: string

  @Column()
  endereco: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Tournaments
