import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { IGasPrice } from './gasprice.interface';

@Injectable()
export class GaspriceService {
  private blockNativeURL = process.env.BLOCKNATIVE_URL;
  private blockNativeAPIKEY = process.env.BLOCKNATIVE_APIKEY;

  constructor(private readonly httpService: HttpService) {}

  getGasPrice(): Observable<AxiosResponse<IGasPrice>> {
    return this.httpService.get(this.blockNativeURL, {
      headers: {
        Authorization: this.blockNativeAPIKEY,
      },
    });
  }
}
