/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Person } from 'src/person/entity/person.entity';
import { Login } from 'src/login/entity/login.entity';
import { LoginModule } from './login/login.module';
import { PersonModule } from './person/person.module';
import { Book } from './books/entity/books.entity';
import { BooksModule } from './books/books.module';
import { BooksUsersModule } from './books-users/books-users.module';
import { BookUsers } from './books-users/entity/books-users.entity';
 import { CacheModule } from '@nestjs/common';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'bookMgmnt',
      entities: [Person, Login, Book, BookUsers],
      synchronize: false,

    }), PersonModule, LoginModule, BooksModule, BooksUsersModule,CacheModule.register()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }


