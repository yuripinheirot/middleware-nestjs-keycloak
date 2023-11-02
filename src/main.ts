import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './shared/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const logger = new CustomLoggerService();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);
  logger.log(`Server is running on port ${port}`);
}
bootstrap();
