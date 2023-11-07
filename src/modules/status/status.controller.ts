import { Controller, Get } from '@nestjs/common';
import { Unprotected } from 'nest-keycloak-connect';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Controller('status')
export class StatusController {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setPrefix('StatusController');
  }

  @Get()
  @Unprotected()
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
