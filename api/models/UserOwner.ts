import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn} from "typeorm"
import User from "./User";
import ReportVerification from "./ReportVerification";
import GymOwnership from "./GymOwnership";

@Entity()
export default class UserOwner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int",
    unique: true
  })
  userId: number;

  @OneToOne(() => User, (user) => user.userOwner, {
    cascade: ["update", "remove"]
  })
  @JoinColumn()
  user: Promise<User>;

  @OneToMany(() => GymOwnership, (gymOwnership) => gymOwnership.userOwner, {
    cascade: ["update", "remove"]
  })
  gymOwnerships: Promise<GymOwnership[]>;

  @OneToMany(() => ReportVerification, reportVerification => reportVerification.verifiedByUserOwner)
  reportVerifications: Promise<ReportVerification[]>;
}
