/* eslint-disable prettier/prettier */
import { Injectable, Logger, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/books.entity';
import { BadRequestException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class BooksService {
    private readonly logger = new Logger(BooksService.name);
    

    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    
    ) { }

    async addBookDetails(book: Book): Promise<Book> {
        const result = await this.bookRepository.save(book);
        if (result) {
            this.logger.log("book details added")
            return result;
        }
        else {
            this.logger.error("book details not added")
            throw new ForbiddenException();
        }
    }

    async getBookById(id: number): Promise<Book> {
        const result = await this.bookRepository.findOne(id);
        if (result) {
            this.logger.log("book details are as following")
            return result;
        }
        else {
            this.logger.error("book details are null")
            throw new BadRequestException();
        }
    }

    async deleteBookById(id: number): Promise<string> {
        const result = await this.bookRepository.delete(id);
        if (result.affected == 1) {
            return 'Book Details Deleted Succesfully';
        }
        else {
            throw new ForbiddenException();
        }
    }

    async UpdateBookByID(id: number, book: Book): Promise<string> {
        const result = await this.bookRepository.update(id, book);
        if (result.affected == 1) {
            return 'Book Details updated Succesfully';
        }
        else {
            throw new ForbiddenException();
        }
    }

}


