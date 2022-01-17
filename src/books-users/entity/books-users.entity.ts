/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Person } from 'src/person/entity/person.entity';
import { JoinTable } from 'typeorm';

@Entity()
export class BookUsers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    emailId: string;

    @Column()
    @ApiProperty()
    ISBNNumber: number;

    @Column()
    bookName: string;

    @Column()
    @ApiProperty()
    date: string;

    @Column()
    @ApiProperty()
    reviewComments: string;

    @ManyToMany(() => Person, person => person.bookuser, {
        cascade: true,onUpdate:"CASCADE"
    })
    @JoinTable()
    person: Person[];

    async addPerson(person: Person): Promise<Person> {
        if (this.person == null) {
            this.person = new Array<Person>();
        }
        this.person.push(person);
        return person;
    }
}
