/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('matchs')
class Matchs {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  status: string

  @Column({ nullable: true })
  local: string

  @Column({ type: 'varchar', nullable: true })
  user_winner_id: string

  @Column({ type: 'varchar', nullable: true })
  participant_winner_id: string

  @Column({ type: 'varchar', nullable: true })
  player1_id: string

  @Column({ type: 'varchar', nullable: true })
  player2_id: string

  @Column({ type: 'varchar', nullable: true })
  participant1_id: string

  @Column({ type: 'varchar', nullable: true })
  participant2_id: string

  @Column({ nullable: true })
  score: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Matchs
