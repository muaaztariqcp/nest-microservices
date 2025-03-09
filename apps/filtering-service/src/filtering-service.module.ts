import { Module } from '@nestjs/common';
import { FilteringServiceController } from './filtering-service.controller';
import { FilteringServiceService } from './filtering-service.service';

@Module({
  imports: [],
  controllers: [FilteringServiceController],
  providers: [FilteringServiceService],
})
export class FilteringServiceModule {}
