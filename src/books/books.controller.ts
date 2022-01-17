/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Body, CACHE_MANAGER, Controller, Delete, Get, Inject, Param, Post, Put, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './entity/books.entity';
import { HttpExceptionFilter } from 'src/filter/HttpExceptionFilter';
import { Cache } from 'cache-manager';

@Controller('books')
@ApiTags('books')
export class BooksController {
    fakeValue = "my name is V";
    constructor(private readonly bookService: BooksService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache) { }
    @Get()
    async getSimpleString() {
        var value = await this.cacheManager.get('sVal');
        if (value) {
            return {
                data: value,
                LoadFrom: 'redis Cache'
            }
        }
        await this.cacheManager.set('sVal', this.fakeValue, { ttl: 300 });
        return {
            data: this.fakeValue,
            LoadFrom: 'fake dB'
        }
    }

    @Get('/:id')
    @UseFilters(new HttpExceptionFilter())
    getBookById(@Param('id') id: number): Promise<Book> {
        const result = this.bookService.getBookById(id);
        this.cacheManager.set('key', result);
        // const cacheResult = this.cacheManager.get("key");
        return result;
    }

    @Post()
    // @UsePipes(new ValidationPipe())
    addBookDetails(@Body() user: Book): Promise<Book> {
        console.log('from add user');
        return this.bookService.addBookDetails(user);
    }

    @Delete('/:id')
    @UseFilters(new HttpExceptionFilter())
    deleteBookById(@Param('id') id: number): Promise<string> {
        return this.bookService.deleteBookById(id);
    }

    @Put('/:id')
    @UseFilters(new HttpExceptionFilter())
    UpdateBookByID(@Param('id') id: number, @Body() user: Book): Promise<string> {
        return this.bookService.UpdateBookByID(id, user);
    }

}
