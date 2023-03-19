import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne} from "typeorm"
import EquipmentCategory from "./EquipmentCategory";
import Report from "./Report";

@Entity()
export default class Equipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({
    type: "int",
  })
  categoryId: number;

  @ManyToOne(() => EquipmentCategory, (equipmentCategory) => equipmentCategory.equipment)
  category: Promise<EquipmentCategory>;

  @Column()
  name: string = '';

  @Column()
  description: string = '';

  @Column()
  imagePath: string = '';

  @OneToMany(() => Report, (report) => report.equipment)
  reports: Promise<Report[]>;
}
