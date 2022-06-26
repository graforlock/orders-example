import { Controller, Get } from '@nestjs/common';
import { Order } from 'src/modules/orders/domain/entities/Order';
import { FindOrders } from './FindOrders';

@Controller('orders')
export class FindOrdersController {
  constructor(private readonly findOrders: FindOrders) {}

  @Get()
  async findAll(): Promise<Order[]> {    
    const result = this.findOrders.execute();

    return await result;
  }
}
