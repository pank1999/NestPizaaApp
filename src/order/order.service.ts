import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from 'src/core/constants';
import {OrderDto}  from "./dto/order.dto"
import { Order } from './order.entity';

@Injectable()
export class OrderService {

    constructor(@Inject(forwardRef(() => ORDER_REPOSITORY)) private readonly orderRepository: typeof Order) { }

    async create(orderData: OrderDto) {
        console.log("order service",orderData);
        return await this.orderRepository.create(orderData);
    }
    async findOneByUserId(userId: number): Promise<Order[]> {
        return await this.orderRepository.findAll<Order>({ where: { userId } });
    }
    async findAllIngredient(): Promise<Order[]>{
        return await this.orderRepository.findAll();   
    }
}
