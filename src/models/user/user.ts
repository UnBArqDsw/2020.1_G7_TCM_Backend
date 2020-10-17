/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  nickname: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  birthday: Date

  @Column()
  photo: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date
}

export default User
