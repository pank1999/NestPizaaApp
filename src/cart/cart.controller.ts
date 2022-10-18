import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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
    @Post()
    addPizzaToCart(@Body() cartData:CartDto){
        console.log("post req cart========",cartData);
       return  this.cartService.create(cartData);
         
    }

    @Delete('/:userId')
    deleteUserCart(@Param('userId') userId:number){
        console.log("delete req cart========",userId);
        return this.cartService.findAndDelete(userId);
    }
    @Delete()
    deleteUserCartOne(@Query('userId') userId:number,@Query('cartId')cartId:number){
        console.log("delete req cart========",userId,cartId);
        return this.cartService.findAndDeleteOne(userId,cartId);
    }
}
