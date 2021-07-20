import { Injectable } from '@nestjs/common';
import * as fetch from 'node-fetch';

@Injectable()
export class RestService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  BITCOIN = '5517577077';

  async getTokens(options) {
    console.log('RUN TOKENS', options);
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': `${options.apiKey}`,
      },
    };
    const tokens = await fetch(`${options.apiUrl}${this.BITCOIN}`, config);
    const res = await tokens.json();
    console.log('>>>>>>>>>>>>>', res);
    return res;
  }
}
