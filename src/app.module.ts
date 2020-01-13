import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import {ConfigModule} from '@nestjs/config';
import database from './config/database.config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'), CatsModule, ConfigModule.forRoot({
    load: [database],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

