import { Injectable } from '@nestjs/common';

@Injectable()
export class FilteringServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
