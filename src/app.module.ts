import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaspriceModule } from './gasprice/gasprice.module';

@Module({
  imports: [ConfigModule.forRoot(), GaspriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
