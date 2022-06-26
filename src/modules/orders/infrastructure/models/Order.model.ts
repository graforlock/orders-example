import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  name: string;

  @Prop()
  qty: number;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);