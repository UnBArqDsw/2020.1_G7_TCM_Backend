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
import Participants from '../participant/participant'

@Entity('matchs')
class Matchs {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  status: string

  @Column()
  winner: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'winner' })
  winner_id: User

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'winner' })
  winner_id2: Participants

  @Column()
  player1: string

  @Column()
  player2: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'player1' })
  player1_id: User

  @OneToOne(() => User)
  @JoinColumn({ name: 'player2' })
  player2_id: User

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'player1' })
  participant1_id: Participants

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'player2' })
  participant2_id: Participants

  @Column()
  score: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Matchs
