import { Test, TestingModule } from '@nestjs/testing';
import { FilteringServiceController } from './filtering-service.controller';
import { FilteringServiceService } from './filtering-service.service';

describe('FilteringServiceController', () => {
  let filteringServiceController: FilteringServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FilteringServiceController],
      providers: [FilteringServiceService],
    }).compile();

    filteringServiceController = app.get<FilteringServiceController>(FilteringServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(filteringServiceController.getHello()).toBe('Hello World!');
    });
  });
});
