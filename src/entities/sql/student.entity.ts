import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Student")
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    age!: number;

    @Column()
    email!: string;
}
