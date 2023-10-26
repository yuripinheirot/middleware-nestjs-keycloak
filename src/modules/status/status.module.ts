import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { Logger } from 'src/services/logger/logger.service';

@Module({
  controllers: [StatusController],
  providers: [Logger],
})
export class StatusModule {}
