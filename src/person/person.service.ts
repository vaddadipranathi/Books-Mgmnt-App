/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from 'src/login/entity/login.entity';
import { Repository } from 'typeorm';
import { Person } from './entity/person.entity';
import { CustomException } from './../filter/customException.exception';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
        @InjectRepository(Login)
        private loginRepository: Repository<Login>
    ) { }

    async addPersonDetails(person: Person): Promise<Person> {
        // eslint-disable-next-line prefer-const
        let login: Login = new Login();
        login.emailId = person.emailId;
        login.password = person.password;
        const person1 = await this.personRepository.save(person);
        login.person = person1;
        this.loginRepository.save(login);
        return person1;
    }

    getAllPersonDetails(): Promise<Person[]> {
        return this.personRepository.find();
    }

    async getPersonByID(id: number): Promise<Person> {
        const result = await this.personRepository.findOne(id);
        if (result) {
            return result;
        }
        else {
            throw new CustomException("person not found");
        }
    }
}
