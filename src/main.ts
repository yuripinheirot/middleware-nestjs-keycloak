import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './services/logger/logger.service';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);

  app.useLogger(logger);

  await app.listen(port);

  logger.log(`Server is running on port ${port}`);
}
bootstrap();
