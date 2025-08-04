import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');
  console.log(join(__dirname, '..', '..', 'public', 'uploads'));

  app.useStaticAssets(join(__dirname, '..', '..', 'public', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.enableShutdownHooks();

  await app.listen(8000);
}
bootstrap();
