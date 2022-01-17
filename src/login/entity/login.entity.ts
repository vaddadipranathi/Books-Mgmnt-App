/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Person } from 'src/person/entity/person.entity';

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    emailId: string;

    @Column()
    @ApiProperty()
    password: string;

    @OneToOne(() => Person, person => person.login, {
        cascade: true
    })
    @JoinColumn()
    person: Person;
}
