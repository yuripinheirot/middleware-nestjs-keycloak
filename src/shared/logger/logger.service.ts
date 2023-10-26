import { Injectable, LoggerService } from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private prefix: string = 'CustomLoggerService';

  log(message: string, ...optionalParams: any[]) {
    console.log(`[LOG] [${this.prefix}] ${message}`, ...optionalParams);
  }
  error(message: string, ...optionalParams: any[]) {
    if (optionalParams[0] instanceof AxiosError) {
      const error = optionalParams[0];

      return console.log(`[ERROR] [${this.prefix}] ${message}`, {
        name: error.name,
        message: error.message,
        stack: error.stack,
        code: error.code,
        response: {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
        },
      });
    }

    console.log(`[ERROR] [${this.prefix}] ${message}`, ...optionalParams);
  }
  warn(message: string, ...optionalParams: any[]) {
    console.log(`[WARN] [${this.prefix}] ${message}`, ...optionalParams);
  }
  setPrefix(prefix: string) {
    this.prefix = prefix;
  }
}
