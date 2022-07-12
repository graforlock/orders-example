import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersRepository } from 'src/modules/orders/infrastructure/repository/Order.repository';
import { Order, OrderSchema } from 'src/modules/orders/infrastructure/models/Order.model';
import { FindOrdersController } from './useCases/FindOrders/FindOrders.controller';
import { FindOrders } from './useCases/FindOrders/FindOrders';
import { CreateOrdersController } from './useCases/CreateOrders/CreateOrders.controller';
import { CreateOrders } from './useCases/CreateOrders/CreateOrders';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [CreateOrdersController, FindOrdersController],
  providers: [OrdersRepository, CreateOrders, FindOrders],
})
export class OrdersModule {}
