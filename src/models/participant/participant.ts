import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('participants')
class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  status: boolean

  @Column()
  participant_type: string

  @Column()
  players: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Participant
