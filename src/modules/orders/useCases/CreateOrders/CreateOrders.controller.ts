import { Controller, Body, Post } from '@nestjs/common';
import { Order } from 'src/modules/orders/domain/entities/Order';
import { CreateOrderDto } from '../../dto/CreateOrder.dto';
import { CreateOrders } from './CreateOrders';

@Controller('orders')
export class CreateOrdersController {
  constructor(private readonly createrders: CreateOrders) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> { 
    const result = this.createrders.execute(createOrderDto);

    return await result;
  }
}
