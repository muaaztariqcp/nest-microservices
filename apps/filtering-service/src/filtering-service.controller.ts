import { Controller, Get } from '@nestjs/common';
import { FilteringServiceService } from './filtering-service.service';

@Controller()
export class FilteringServiceController {
  constructor(private readonly filteringServiceService: FilteringServiceService) {}

  @Get()
  getHello(): string {
    return this.filteringServiceService.getHello();
  }
}
