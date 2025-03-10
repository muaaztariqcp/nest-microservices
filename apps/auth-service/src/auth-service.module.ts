import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { DbModule } from '@libs/db';

@Module({
  imports: [DbModule],
  controllers: [AuthServiceController],
  providers: [AuthServiceService]
})
export class AuthServiceModule {}
