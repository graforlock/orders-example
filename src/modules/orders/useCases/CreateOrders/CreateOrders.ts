import { Injectable, Scope } from '@nestjs/common';
import { OrdersService } from 'src/modules/orders/domain/services/Order.service';
import { Order } from '../../domain/entities/Order';
import { CreateOrderDto } from '../../dto/CreateOrder.dto';

@Injectable({ scope: Scope.REQUEST })
export class CreateOrders {  
  constructor(private readonly ordersService: OrdersService) {}

  async execute(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersService.create(createOrderDto);
  }
}