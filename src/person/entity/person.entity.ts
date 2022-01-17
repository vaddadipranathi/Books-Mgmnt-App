/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Login } from 'src/login/entity/login.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { BookUsers } from './../../books-users/entity/books-users.entity';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    userName: string;

    @Column()
    @ApiProperty()
    password: string;

    @Column()
    @ApiProperty()
    phoneNum: number;

    @Column()
    @ApiProperty()
    emailId: string;

    @Column()
    @ApiProperty()
    country: string;

    @Column()
    @ApiProperty()
    state: string;

    @Column()
    @ApiProperty()
    pincode: number;

    @Column()
    @ApiProperty()
    addressLine1: string;

    @Column()
    @ApiProperty()
    addressLine2: string;

    @OneToOne(() => Login, login => login.person)
    login: Login;

    @OneToMany(() => BookUsers, bookuser => bookuser.person)
    bookuser: BookUsers;

}
