/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  RelationId,
} from 'typeorm'

import User from '../user/user'
import Participants from '../participant/participant'
import Tournaments from '../tournament/tournament'

@Entity('matchs')
class Matchs {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  status: string

  @Column()
  local: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_winner_id' })
  user_winner_id: User

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'participant_winner_id' })
  participant_winner_id: Participants

  @OneToOne(() => Tournaments)
  @JoinColumn({ name: 'tournament_id' })
  tournament_id: Tournaments


  @OneToOne(() => User)
  @JoinColumn({ name: 'player1_id' })
  player1_id: User

  @OneToOne(() => User)
  @JoinColumn({ name: 'player2_id' })
  player2_id: User

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'participant1_id' })
  participant1_id: Participants

  @OneToOne(() => Participants)
  @JoinColumn({ name: 'participant2_id' })
  participant2_id: Participants

  @Column()
  score: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Matchs;
