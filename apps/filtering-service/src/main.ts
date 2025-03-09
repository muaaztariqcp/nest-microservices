import { NestFactory } from '@nestjs/core';
import { FilteringServiceModule } from './filtering-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FilteringServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 4001
      }
    }
  );
  await app.listen();
  Logger.log('filtering-microservice has started!');
}
bootstrap();
