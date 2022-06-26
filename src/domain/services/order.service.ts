import { Injectable, Inject } from '@nestjs/common';
import { Order } from 'src/domain/entities/Order';
import { CreateOrderDto } from 'src/application/dto/create-order.dto';
import { OrdersRepository } from 'src/infrastructure/repository/order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly repository: OrdersRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

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