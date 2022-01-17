/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { Login } from 'src/login/entity/login.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('login')
@ApiTags('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    // @Post()
    // addLoginDetails(@Body() loginUser: Login): Promise<Login> {
    //     return this.loginService.addLoginDetails(loginUser);
    // }

    @Post()
    validateLoginCredentials(@Body() login: Login): Promise<string> {
        return this.loginService.validateLoginCredentials(login);
    }
    @Get("/getAll")
    getAllLoginDetails(): Promise<Login[]> {
        return this.loginService.getAllLoginDetails();
    };

}
