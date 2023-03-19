import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm"
import Equipment from "./Equipment";

@Entity()
export default class EquipmentCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({
    type: "varchar",
    unique: true
  })
  name: string = '';

  @OneToMany(() => Equipment, (equipment) => equipment.category, {
    cascade: ["update", "remove"]
  })
  equipment?: Promise<Equipment[]>;
}
