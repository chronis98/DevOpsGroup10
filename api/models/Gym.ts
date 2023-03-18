import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Geometry, OneToOne, OneToMany} from "typeorm"
import {Address} from "./Address";
import {GymOwnership} from "./GymOwnership";

@Entity()
export class Gym extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int"
  })
  addressId: number;

  @Column({
    type: "varchar",
    length: 45
  })
  name: string;

  @Column({
    type: "varchar",
    length: 45
  })
  telephone: string;

  @Column({
    type: "varchar",
    length: 45
  })
  email: string;

  @OneToOne(() => Address, (address) => address.gym, {
    cascade: ["update", "remove"]
  })
  address: Promise<Address>;

  @OneToMany(() => GymOwnership, (gymOwnership) => gymOwnership.gym)
  ownerships: Promise<GymOwnership[]>;
}
