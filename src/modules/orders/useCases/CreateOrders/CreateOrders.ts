import { Injectable, Scope } from '@nestjs/common';
import { Order } from '../../domain/entities/Order';
import { CreateOrderDto } from '../../dto/CreateOrder.dto';
import { OrdersRepository } from '../../infrastructure/repository/Order.repository';

@Injectable({ scope: Scope.REQUEST })
export class CreateOrders {  
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async execute(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersRepository.create(createOrderDto);
  }
}