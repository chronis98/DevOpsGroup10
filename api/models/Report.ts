import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Geometry, OneToOne, Unique, ManyToOne} from "typeorm"
import {Gym} from "./Gym";
import {User} from "./User";
import {Equipment} from "./Equipment";

@Entity()
@Unique(['gymId', 'equipmentId', 'userId'])
export class Report extends BaseEntity {
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
  date: Date;

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
    cascade: ["update", "remove"]
  })
  gym: Promise<Gym>;

  @ManyToOne(() => Equipment, (equipment) => equipment.reports, {
    cascade: ["update", "remove"]
  })
  equipment: Promise<Equipment>;

  @ManyToOne(() => User, (user) => user.reports, {
    cascade: ["update", "remove"]
  })
  user: Promise<User>;
}
