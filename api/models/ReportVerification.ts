import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Geometry,
  OneToOne,
  Unique,
  ManyToOne,
  OneToMany
} from "typeorm"
import Report from "./Report";
import UserOwner from "./UserOwner";

@Entity()
export default class ReportVerification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int"
  })
  reportId: number;

  @Column({
    type: "int"
  })
  verifiedByUserOwnerId: number;

  @Column({
    type: "datetime"
  })
  createdAt: Date;

  @Column({
    type: "varchar",
    nullable: true
  })
  comment: string;

  @ManyToOne(() => Report, (report) => report.verifications)
  report: Promise<Report>;

  @ManyToOne(() => UserOwner, (userOwner) => userOwner.reportVerifications)
  verifiedByUserOwner: Promise<UserOwner>;
}
