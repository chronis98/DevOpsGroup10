import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Geometry} from "typeorm"

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  number: number = 0;

  @Column()
  addition?: string;

  @Column()
  street: string = '';

  @Column()
  city: string = '';

  @Column()
  postcode: string = '';

  @Column({
    type: "point",
    nullable: true,
    spatialFeatureType: "Point",
    srid: 4326,
  })
  coords: string = '';
}
