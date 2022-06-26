import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/domain/entities/Order';
import { Order as OrderSchema, OrderDocument } from 'src/infrastructure/models/Order.model';
import { CreateOrderDto } from 'src/application/dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectModel(OrderSchema.name) private readonly model: Model<OrderDocument>,
  ) {}

  async create(order:  CreateOrderDto): Promise<Order> {
    const newOrder = await this.model.create(order);
    return newOrder;
  }

  async find(): Promise<Order[]> {
    const allOrders: Order[] = [
      await this.model.create({ name: 'Bag of lies', description: 'lorem ipsum', qty: 0, price: 59.00 }),
    ];

    return  allOrders;
  }

  async findOne(id: string): Promise<Order[]> {
    return await this.model.findOne({ _id: id });
  }
}