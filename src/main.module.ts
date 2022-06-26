import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from 'src/application/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
    OrdersModule,
  ],
})
export class MainModule {}