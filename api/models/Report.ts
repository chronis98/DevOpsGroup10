import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import User from "./User";
import Equipment from "./Equipment";
import ReportVerification from "./ReportVerification";
import Gym from "./Gym";

@Entity()
export default class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int"
  })
  gymId: number;

  @Column({
    type: "int"
  })
  equipmentId: number;

  @Column({
    type: "int"
  })
  userId: number;

  @Column({
    type: "datetime"
  })
  createdAt: Date;

  @Column({
    type: "tinyint",
    width: 1,
    nullable: true
  })
  status: boolean | null = null;

  @Column({
    type: "varchar",
    length: 1000,
    nullable: true
  })
  comment: string | null = null;

  @ManyToOne(() => Gym, (gym) => gym.reports, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  gym: Promise<Gym>;

  @ManyToOne(() => Equipment, (equipment) => equipment.reports, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  equipment: Promise<Equipment>;

  @ManyToOne(() => User, (user) => user.reports, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  user: Promise<User>;

  @OneToMany(() => ReportVerification, reportVerification => reportVerification.report)
  verifications: Promise<ReportVerification[]>;
}
