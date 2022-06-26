import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from 'src/domain/services/order.service';
import { OrdersController } from './orders.controller';

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
  });

  describe('root', () => {
    it('should return no results', () => {
      expect(ordersController.findAll()).toBe([]);
    });
  });
});
