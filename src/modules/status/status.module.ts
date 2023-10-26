import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Module({
  controllers: [StatusController],
  providers: [CustomLoggerService],
})
export class StatusModule {}
