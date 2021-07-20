import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RestService } from './rest.service';

@Controller('rest')
export class RestController {
  constructor(
    private configService: ConfigService,
    private restService: RestService,
  ) {}
  @Get('/tokens')
  async getTokensValue() {
    const apiUrl = this.configService.get('API_PATH');
    const apiKey = this.configService.get('API_KEY');
    const options = {
      apiUrl,
      apiKey,
    };
    const tokens = await this.restService.getTokens(options);
    return tokens;
  }
}
