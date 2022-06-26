import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/modules/orders/domain/entities/Order';
import { Order as OrderSchema, OrderDocument } from 'src/modules/orders/infrastructure/models/Order.model';
import { CreateOrderDto } from 'src/modules/orders/dto/CreateOrder.dto';

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
    const allOrders: Order[] = await this.model.find();

    return  allOrders;
  }

  async findOne(id: string): Promise<Order[]> {
    return await this.model.findOne({ _id: id });
  }
}