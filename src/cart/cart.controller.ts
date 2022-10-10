import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService:CartService){}

    @Get('/:userId')
    getUserCart(@Param() userId:number){
        this.cartService.findByUserId(userId);
    }

    @Post()
    addPizzaToCart(@Body() cartData:CartDto){
        this.cartService.create(cartData);
    }
}
