import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Geometry, OneToOne} from "typeorm"
import {Gym} from "./Gym";

type LatLng = {lat: number, long: number};

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  number: number = 0;

  @Column({
    type: "varchar",
    nullable: true
  })
  addition: string | null = null;

  @Column()
  street: string = '';

  @Column()
  city: string = '';

  @Column()
  postcode: string = '';

  @Column({
    type: "point",
    nullable: false,
    spatialFeatureType: "Point",
    srid: 4326,
    transformer: {
      to(value: LatLng): string {
        return `POINT(${value.lat} ${value.long})`
      },
      from(value: string): LatLng {
        const [lat, long] = value
            .replace(/(POINT\()|\)/g, '')
            .split(' ')
            .map(coord => parseFloat(coord)) as [number, number];
        return {lat, long};
      }
    }
  })
  coords: LatLng = {lat: 0, long: 0}

  @OneToOne(() => Gym, (gym) => gym.address)
  gym: Promise<Gym>;
}
