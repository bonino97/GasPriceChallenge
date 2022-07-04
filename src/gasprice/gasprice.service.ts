import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

import { IGasPrice } from './gasprice.interface';

@Injectable()
export class GaspriceService {
  private blockNativeURL = 'https://api.blocknative.com/gasprices/blockprices';
  private blockNativeAPIKEY = 'e41fc8b8-24a5-4fa1-bc10-64d9561ceff1';

  constructor(private readonly httpService: HttpService) {}

  getGasPrice(): Observable<AxiosResponse<IGasPrice>> {
    return this.httpService.get(this.blockNativeURL, {
      headers: {
        Authorization: this.blockNativeAPIKEY,
      },
    });
  }
}
