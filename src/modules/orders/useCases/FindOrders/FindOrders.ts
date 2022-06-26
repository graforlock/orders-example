import { Injectable, Scope } from '@nestjs/common';
import { OrdersService } from 'src/modules/orders/domain/services/Order.service';
import { Order } from '../../domain/entities/Order';

@Injectable({ scope: Scope.REQUEST })
export class FindOrders {  
  constructor(private readonly ordersService: OrdersService) {}

  async execute(): Promise<Order[]> {
    return await this.ordersService.find();
  }
}