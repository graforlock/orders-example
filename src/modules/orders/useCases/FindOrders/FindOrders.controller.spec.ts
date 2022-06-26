import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from 'src/modules/orders/domain/services/Order.service';
import { FindOrdersController } from './FindOrders.controller';

describe('FindOrdersController', () => {
  let findordersController: FindOrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FindOrdersController],
      providers: [OrdersService],
    }).compile();

    findordersController = app.get<FindOrdersController>(FindOrdersController);
  });

  describe('root', () => {
    it('should return no results', () => {
      expect(findordersController.findAll()).toBe([]);
    });
  });
});
