/* eslint-disable prettier/prettier */
import { CacheModule, Module } from '@nestjs/common';
import { Book } from './entity/books.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Book]),CacheModule.register()],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule { }
