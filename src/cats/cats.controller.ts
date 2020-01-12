import {Body, Controller, Get, Post} from '@nestjs/common';
import {CatsService} from './cats.service';
import {CreateCatDto} from './Dto/create-cat.dto';
import {Cat} from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) {}
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        await this.catService.create(createCatDto);
    }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }
}
