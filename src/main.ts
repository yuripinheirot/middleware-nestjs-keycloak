import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './shared/logger/logger.service';

const port = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new CustomLoggerService();
  await app.listen(port);

  logger.log(`Server is running on port ${port}`);
}
bootstrap();
