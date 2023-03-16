import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Equipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  categoryId: number = 0;

  @Column()
  name: string = '';

  @Column()
  description: string = '';

  @Column()
  imagePath: string = '';
}
