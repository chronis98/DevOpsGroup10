import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Geometry, OneToOne, OneToMany, ManyToOne} from "typeorm"
import {Address} from "./Address";
import {Gym} from "./Gym";
import {UserOwner} from "./UserOwner";

@Entity()
export class GymOwnership extends BaseEntity {
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

  @ManyToOne(() => UserOwner, (userOwner) => userOwner.gymOwnerships)
  userOwner: Promise<UserOwner>;

  @ManyToOne(() => Gym, (gym) => gym.ownerships)
  gym: Promise<Gym>;
}
