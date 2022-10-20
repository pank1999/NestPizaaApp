import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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

    @Delete()
    deleteUserCartOne(@Query('userId') userId:number,@Query('orderId')cartId:number){
        console.log("delete req cart========",userId,cartId);
        return this.orderService.findAndDeleteOrder(cartId,userId);
    }



}
