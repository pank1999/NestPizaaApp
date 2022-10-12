import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private cartService:CartService){}
     
    //get cart by user
    @Get('/:userId')
    getUserCart(@Param('userId') userId:number){
        console.log(userId);
        return this.cartService.findByUserId(userId);
    } 

    @Get()
    getCart(){
       return this.cartService.findAllIngredient();
    }

    //add Pizza to cart
    @Post("/addPizza")
    addPizzaToCart(@Body() cartData:CartDto){
        this.cartService.create(cartData);
    }
}
