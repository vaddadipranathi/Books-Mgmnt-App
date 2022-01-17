/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    @IsString()
    bookName: string;

    @Column()
    @ApiProperty()
    @IsString()
    bookAuthor: string;

    @Column()
    @ApiProperty()
    @IsNumber()
    ISBNNumber: number;

    @Column()
    @ApiProperty()
    @IsNumber()
    noOfPages: number;
}
