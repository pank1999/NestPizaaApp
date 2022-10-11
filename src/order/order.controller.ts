import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
     
    constructor(private orderService:OrderService){}
     
    @Get('/:userId')
    getOrders(@Param('userId') userID:number){
        return  this.orderService.findOneByUserId(userID);
    }

    @Post()
    createOrder(@Body() orderData:OrderDto){
       return this.orderService.create(orderData);
    }

}
