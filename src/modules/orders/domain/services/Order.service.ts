import { Injectable, Inject } from '@nestjs/common';
import { Order } from 'src/modules/orders/domain/entities/Order';
import { CreateOrderDto } from 'src/modules/orders/dto/CreateOrder.dto';
import { OrdersRepository } from 'src/modules/orders/infrastructure/repository/Order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrdersRepository) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.repository.create(createOrderDto);
  }

  async find(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<Order[]> {
    return await this.repository.findOne(id);
  }
}