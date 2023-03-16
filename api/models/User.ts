import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    email: string = '';

    @Column()
    password: string = '';
}
