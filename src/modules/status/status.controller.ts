import { Controller, Get } from '@nestjs/common';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Controller('status')
export class StatusController {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setPrefix('StatusController');
  }

  @Get()
  getStatus() {
    try {
      const message = { status: 'ok', message: "Hello! I'm here!" };
      this.logger.log('getStatus()', message);

      return message;
    } catch (error) {
      this.logger.error('getStatus()', error);
    }
  }
}
