import { Module } from '@nestjs/common';
import { StatusModule } from './modules/status/status.module';
import { LoggerModule } from './services/logger/logger.module';

@Module({
  imports: [StatusModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
