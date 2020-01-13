import { Injectable } from '@nestjs/common';
import {ApiConfigService} from './config/api.config.service';

@Injectable()
export class AppService {
  constructor(apiConfigService: ApiConfigService) {
      if (apiConfigService.isAuthEnabled) {
          // Authentication is enabled
      }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
