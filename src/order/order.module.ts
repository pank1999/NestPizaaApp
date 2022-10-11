import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { orderProviders } from './order.provider';

@Module({
  providers: [OrderService,...orderProviders],
  controllers: [OrderController],
  exports:[OrderService]
})
export class OrderModule {}
