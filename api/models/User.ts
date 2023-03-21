import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"
import Report from "./Report";
import UserOwner from "./UserOwner";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({
    unique: true
  })
  email: string = '';

  @Column()
  password: string = '';

  @Column({
    type: "datetime"
  })
  createdAt: Date;

  @Column()
  username: string;

  @OneToOne(() => UserOwner, (userOwner) => userOwner.user, {
    nullable: true
  })
  userOwner: Promise<UserOwner | null>;

  @OneToMany(() => Report, (report) => report.user)
  reports: Promise<Report[]>;
}
