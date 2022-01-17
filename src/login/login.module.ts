/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Login } from 'src/login/entity/login.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Login])],
    controllers: [LoginController],
    providers: [LoginService],
})
export class LoginModule {

}
