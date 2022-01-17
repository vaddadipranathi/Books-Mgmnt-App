/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { BooksUsersService } from './books-users.service';
import { BookUsers } from 'src/books-users/entity/books-users.entity';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filter/HttpExceptionFilter';

@Controller('books-users')
@ApiTags('books-users')
@UseFilters(new HttpExceptionFilter())
export class BooksUsersController {
    constructor(private readonly bookService: BooksUsersService) { }

    @Get('/:id')
    getBookUserById(@Param('id') id: number): Promise<BookUsers> {
        return this.bookService.getBookUserById(id);
    }

    @Post()
    addBookUserDetails(@Body() user: BookUsers): Promise<BookUsers> {
        return this.bookService.addBookUserDetails(user);
    }

    @Delete('/:id')
    deleteBookUserById(@Param('id') id: number): Promise<string> {
        return this.bookService.deleteBookUserById(id);
    }

    @Put('/:id')
    UpdateBookUserByID(@Param('id') id: number, @Body() user: BookUsers): Promise<string> {
        return this.bookService.UpdateBookUserByID(id, user);
    }

}
