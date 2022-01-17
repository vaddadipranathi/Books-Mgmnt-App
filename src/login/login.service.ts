/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomException } from 'src/filter/customException.exception';
import { Login } from 'src/login/entity/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(Login)
        private loginRepository: Repository<Login>
    ) { }

    // async addLoginDetails(login: Login): Promise<Login> {
    //     const emailId: string = login.emailId;
    //     const person = await this.personRepository.find({ where: [{ emailId }] })
    //     console.log("person obj : ", person[0].emailId, " id: ", person[0].id)
    //     login.person = person[0];
    //     return this.loginRepository.save(login);
    // }

    async validateLoginCredentials(login: Login): Promise<string> {
        const loginResult = await this.loginRepository.findOne({
            emailId: login.emailId
        });
        if (!loginResult) {
            throw new HttpException("user email not found", HttpStatus.BAD_REQUEST)
        }
        else {
            const result: boolean = loginResult.emailId == login.emailId && loginResult.password == login.password;
            if (result) {
                return "Succesfully logged in";
            }
            throw new HttpException("credentials not wrong", HttpStatus.BAD_REQUEST)
        }
    }
    async getAllLoginDetails(): Promise<Login[]> {
        const result = await this.loginRepository.find();
        if (result) {
            return result;
        }
        else {
            throw new CustomException("no detail found");
        }
    }
}
