import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"
import {UserOwner} from "./UserOwner";
import {Report} from "./Report";

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

  @OneToMany(() => Report, (report) => report.user)
  reports: Promise<Report[]>;
}
