import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderStatus } from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderSchema: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderSchema.create({
      wallet: createOrderDto.walletId,
      asset: createOrderDto.assetId,
      shares: createOrderDto.shares,
      partials: createOrderDto.shares,
      type: createOrderDto.type,
      status: OrderStatus.PENDING,
    });
  }

  findAll() {
    return this.orderSchema.find();
  }

  findOne(id: string) {
    return this.orderSchema.findById(id);
  }
}
