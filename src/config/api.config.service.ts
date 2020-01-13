import {ConfigService} from '@nestjs/config';
import {Injectable} from '@nestjs/common';
@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {}
    get isAuthEnabled(): boolean {
        return Boolean(this.configService.get('AUTH_ENABLED'));
    }
}
