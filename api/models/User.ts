import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne} from "typeorm"
import {UserOwner} from "./UserOwner";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({
    unique: true
  })
  email: string = '';

  @Column()
  password: string = '';

  @OneToOne(() => UserOwner, (userOwner) => userOwner.user)
  userOwner: Promise<UserOwner | null>;
}
