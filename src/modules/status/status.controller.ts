import { Controller, Get } from '@nestjs/common';
import { Logger } from 'src/services/logger/logger.service';

@Controller('status')
export class StatusController {
  constructor(private readonly logger: Logger) {
    this.logger.setPrefix('[STATUS CONTROLLER]');
  }

  @Get()
  getStatus() {
    const message = { status: 'ok', message: "Hello! I'm here!" };
    this.logger.log('getStatus()', message);
    return message;
  }
}
