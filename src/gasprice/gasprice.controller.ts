import { Controller, Get } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { GaspriceService } from './gasprice.service';

@Controller('gasprice')
export class GaspriceController {
  constructor(private readonly gasPriceService: GaspriceService) {}

  @Get()
  getGasPrice(): Observable<string> {
    return this.gasPriceService.getGasPrice().pipe(
      map((response) => {
        const baseFeePerGas = response?.data?.blockPrices.map(
          (blockPrice) => blockPrice.baseFeePerGas,
        );
        if (!baseFeePerGas) return 'Empty block';
        return String(baseFeePerGas);
      }),
    );
  }
}
