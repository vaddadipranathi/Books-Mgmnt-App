/* eslint-disable prettier/prettier */
import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookUsers } from 'src/books-users/entity/books-users.entity';
import { Person } from 'src/person/entity/person.entity';
import { Book } from './../books/entity/books.entity';


@Injectable()
export class BooksUsersService {
    constructor(
        @InjectRepository(BookUsers)
        private bookUserRepository: Repository<BookUsers>,
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    ) { }

    async addBookUserDetails(bookUser: BookUsers): Promise<BookUsers> {
        const personResult: Person = await this.personRepository.findOne({
            emailId: bookUser.emailId
        });
        console.log("personResult ", personResult);
        console.log("from personresu;t", personResult);
        const p1 = new BookUsers();
        p1.ISBNNumber = bookUser.ISBNNumber;
        p1.date = bookUser.date;
        p1.reviewComments = bookUser.reviewComments;
        p1.emailId = bookUser.emailId;
        p1.addPerson(personResult);

        const bookResult = await this.bookRepository.findOne({
            ISBNNumber: bookUser.ISBNNumber
        });
        bookUser.bookName = bookResult.bookName;
        p1.bookName = bookResult.bookName;
        return await this.bookUserRepository.save(p1);
    }

    async getBookUserById(id: number): Promise<BookUsers> {
        const result = await this.bookUserRepository.findOne(id);
        if (result) {
            return result;
        }
        else {
            throw new ForbiddenException();
        }
    }

    async deleteBookUserById(id: number): Promise<string> {
        const result = await this.bookUserRepository.delete(id);
        if (result) {
            return 'Book Details deleted Succesfully'
        }
        else {
            throw new BadRequestException();
        }
    }

    async UpdateBookUserByID(id: number, bookUser: BookUsers): Promise<string> {
        const result = this.bookUserRepository.update(id, bookUser);
        if (result) {
            return 'Book Details Updated Succesfully'
        }
        else {
            throw new BadRequestException();
        }
    }
}
