import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { existsSync } from 'fs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');

  const clientBuildPath = join(__dirname, '..', '..', 'client', 'build');
  const uploadsPublicPath = join(__dirname, '..', '..', 'public', 'uploads');

  console.log('Build path exists:', existsSync(clientBuildPath));
  console.log('Index exists:', existsSync(join(clientBuildPath, 'index.html')));
  console.log('Uploads path exists:', existsSync(uploadsPublicPath));
  app.use(express.static(clientBuildPath));
  app.useStaticAssets(uploadsPublicPath, {
    prefix: '/uploads/',
  });
  await app.enableShutdownHooks();
  app.use((req, res, next) => {
    if (
      req.originalUrl.startsWith('/api') ||
      req.originalUrl.startsWith('/uploads')
    ) {
      return next();
    }
    console.log('SPA fallback:', req.originalUrl);
    res.sendFile(join(clientBuildPath, 'index.html'));
  });
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}
bootstrap();
