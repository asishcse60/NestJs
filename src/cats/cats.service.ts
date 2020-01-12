import { Injectable } from '@nestjs/common';
import {Cat} from './interfaces/cat.interface';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CreateCatDto} from './Dto/create-cat.dto';
@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}
    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }
    async findAll(): Promise<Cat[]> {
        this.catModel.findById()
        return this.catModel.find().exec();
    }
}
