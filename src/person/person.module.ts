/* eslint-disable prettier/prettier */
import { CacheModule, Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from 'src/person/entity/person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { Login } from './../login/entity/login.entity';
import { BookUsers } from 'src/books-users/entity/books-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Login,BookUsers]),CacheModule.register()],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule { }
