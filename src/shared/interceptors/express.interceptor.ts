import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomLoggerService } from '../logger/logger.service';

@Injectable()
export class AxiosErrorsInterceptor implements NestInterceptor {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setPrefix('POKEAPI');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        return throwError(() => {
          if (error instanceof AxiosError) {
            this.logger.error('AxiosErrorsInterceptor', {
              name: error.name,
              message: error.message,
              status: error.response?.status,
              statusText: error.response?.statusText,
              url: error.config?.url,
              method: error.config?.method,
              baseUrl: error.config?.baseURL,
              response: error.response,
            });

            return new HttpException(
              error.response.data,
              error.response.status,
            );
          }

          this.logger.setPrefix(context.getClass().name);
          this.logger.error(`${context.getHandler().name}()`, {
            name: error.name,
            message: error.message,
            stack: error.stack,
          });

          throw error;
        });
      }),
    );
  }
}
