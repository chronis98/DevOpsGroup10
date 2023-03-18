import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"
import {User} from "./User";
import {GymOwnership} from "./GymOwnership";
import {ReportVerification} from "./ReportVerification";

@Entity()
export class UserOwner extends BaseEntity {
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
  user: Promise<User>;

  @OneToMany(() => GymOwnership, (gymOwnership) => gymOwnership.userOwner, {
    cascade: ["update", "remove"]
  })
  gymOwnerships: Promise<GymOwnership[]>;

  @OneToMany(() => ReportVerification, reportVerification => reportVerification.verifiedByUserOwner)
  reportVerifications: Promise<ReportVerification[]>;
}
