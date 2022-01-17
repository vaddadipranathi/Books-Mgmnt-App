/* eslint-disable prettier/prettier */
import { Body, CACHE_MANAGER, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from 'src/person/entity/person.entity';
import { ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager'
@Controller('person')
@ApiTags('person')
export class PersonController {

    constructor(private readonly personService: PersonService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    @Post()
    addPersonDetails(@Body() person: Person): Promise<Person> {
        return this.personService.addPersonDetails(person);
    }

    @Get("/getAll")
    async getAllPersonDetails(): Promise<Person[]> {
        let result: any; 
        let cacheResult;
        if (cacheResult) {
            console.log("from cache result");
            return cacheResult;
        }
        else {
            console.log("From normal result");
            result = this.personService.getAllPersonDetails();
            this.cacheManager.set('getAllPersonDetails', result, { ttl: 300 });
            cacheResult = (await this.cacheManager.get<Person[]>('getAllPersonDetails')).values;
            console.log(cacheResult);
            return result;
        }
    };

    @Get('/:id')
    getPersonByID(@Param('id') id: number): Promise<Person> {
        return this.personService.getPersonByID(id);
    }
}
