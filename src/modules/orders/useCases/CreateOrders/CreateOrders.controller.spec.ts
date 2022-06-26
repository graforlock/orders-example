import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from 'src/modules/orders/domain/services/Order.service';
import { CreateOrdersController } from './CreateOrders.controller';

describe('CreateOrdersController', () => {
  let findordersController: CreateOrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreateOrdersController],
      providers: [OrdersService],
    }).compile();

    findordersController = app.get<CreateOrdersController>(CreateOrdersController);
  });

  describe('root', () => {
    it('should return a result', () => {
      expect(findordersController.create({
        name: 'fake', qty: 1, price: 49.99, description: 'lorem ipsum'
      })).toBe([]);
    });
  });
});
