import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GaspriceController } from './gasprice.controller';
import { GaspriceService } from './gasprice.service';

@Module({
  controllers: [GaspriceController],
  imports: [HttpModule],
  providers: [GaspriceService],
})
export class GaspriceModule {}
