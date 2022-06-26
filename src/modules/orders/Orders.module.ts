import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from 'src/modules/orders/domain/services/Order.service';
import { OrdersRepository } from 'src/modules/orders/infrastructure/repository/Order.repository';
import { Order, OrderSchema } from 'src/modules/orders/infrastructure/models/Order.model';
import { FindOrdersController } from './useCases/FindOrders/FindOrders.controller';
import { FindOrders } from './useCases/FindOrders/FindOrders';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [FindOrdersController],
  providers: [OrdersService, OrdersRepository, FindOrders],
})
export class OrdersModule {}
