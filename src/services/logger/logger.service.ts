import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class Logger implements LoggerService {
  private prefix: string = '[Nest]';

  log(message: string, ...optionalParams: any[]) {
    console.log(`${this.prefix} ${message}`, ...optionalParams);
  }
  error(message: string, ...optionalParams: any[]) {
    console.log(`${this.prefix} ${message}`, ...optionalParams);
  }
  warn(message: string, ...optionalParams: any[]) {
    console.log(`${this.prefix} ${message}`, ...optionalParams);
  }
  setPrefix(prefix: string) {
    this.prefix = prefix;
  }
}
