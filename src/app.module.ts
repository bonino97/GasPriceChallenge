import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GaspriceModule } from './gasprice/gasprice.module';

@Module({
  imports: [GaspriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
