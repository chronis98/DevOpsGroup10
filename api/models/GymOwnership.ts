import {BaseEntity, Column, Entity, ManyToOne} from "typeorm"
import UserOwner from "./UserOwner";
import Gym from "./Gym";

@Entity()
export default class GymOwnership extends BaseEntity {
  @Column({
    type: "int",
    primary: true
  })
  userOwnerId: number;

  @Column({
    type: "int",
    primary: true
  })
  gymId: number;

  @ManyToOne(() => UserOwner, (userOwner) => userOwner.gymOwnerships, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  userOwner: Promise<UserOwner>;

  @ManyToOne(() => Gym, (gym) => gym.ownerships,{
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  })
  gym: Promise<Gym>;
}
