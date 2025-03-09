import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DB_URI } from '@config';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(DB_URI);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
