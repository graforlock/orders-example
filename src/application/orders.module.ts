import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from 'src/application/controllers/orders.controller';
import { OrdersService } from 'src/domain/services/order.service';
import { OrdersRepository } from 'src/infrastructure/repository/order.repository';
import { Order, OrderSchema } from 'src/infrastructure/models/Order.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
