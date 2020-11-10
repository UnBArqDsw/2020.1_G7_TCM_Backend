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
} from 'typeorm'

import User from '../user/user'

@Entity('tournaments')
class Tournaments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  manager: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'manager' })
  manager_id: User

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

  @Column('varchar', { array: true })
  solicitation: User[]

  @OneToMany(() => User, user => user.id)
  @JoinColumn({ name: 'soliciation' })
  solicitation_id: string

  @Column()
  estado: string

  @Column()
  cidade: string

  @Column('varchar', { array: true })
  participants: string[]

  @Column('varchar', { array: true })
  rounds_ids: string[]

  @Column()
  endereco: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Tournaments
