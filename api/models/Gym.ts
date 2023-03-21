import {BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import Address from "./Address";
import Report from "./Report";
import GymOwnership from "./GymOwnership";

@Entity()
export default class Gym extends BaseEntity {
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

  @Column({
    type: "varchar"
  })
  imagePath: string;

  @OneToOne(() => Address, (address) => address.gym)
  @JoinColumn()
  address: Promise<Address>;

  @OneToMany(() => GymOwnership, (gymOwnership) => gymOwnership.gym)
  ownerships: Promise<GymOwnership[]>;

  @OneToMany(() => Report, (report) => report.gym)
  reports: Promise<Report[]>;
}
