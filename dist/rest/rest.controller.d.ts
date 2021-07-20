import { ConfigService } from '@nestjs/config';
import { RestService } from './rest.service';
export declare class RestController {
    private configService;
    private restService;
    constructor(configService: ConfigService, restService: RestService);
    getTokensValue(): Promise<any>;
}
