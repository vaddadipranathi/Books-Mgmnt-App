/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/person/entity/person.entity';
import { BooksUsersController } from './books-users.controller';
import { BooksUsersService } from './books-users.service';
import { BookUsers } from './entity/books-users.entity';
import { Book } from './../books/entity/books.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BookUsers, Person, Book])],

    controllers: [BooksUsersController],
    providers: [BooksUsersService],
})
export class BooksUsersModule { }
