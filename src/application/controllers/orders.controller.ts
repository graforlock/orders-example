import { Controller, Get, Param } from '@nestjs/common';
import { Order } from 'src/domain/entities/Order';
import { OrdersService } from 'src/domain/services/order.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return await this.ordersService.find();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Order[]> {
    return await this.ordersService.findOne(params.id);
  }
}
