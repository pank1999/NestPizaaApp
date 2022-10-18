import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CART_REPOSITORY } from 'src/core/constants';
import { Cart } from './cart.entity';
import { CartDto } from './dto/cart.dto';

@Injectable()
export class CartService {
    constructor(@Inject(forwardRef(() => CART_REPOSITORY)) private readonly cartRepository: typeof Cart) { }

    async create(cartData: CartDto): Promise<Cart> {
        console.log(cartData);
        return await this.cartRepository.create<Cart>(cartData);
    }
    async findByUserId(userId: number): Promise<Cart[]> {
        console.log(userId);
        return await this.cartRepository.findAll<Cart>({ where: { userId } });
    }
    async findAllIngredient(): Promise<Cart[]>{
        return await this.cartRepository.findAll();   
    }
    async findAndDelete(userId:number){
        return await this.cartRepository.destroy({where:{userId:userId}});
    }

    async findAndDeleteOne(userId:number,cartId:number){
        return await this.cartRepository.destroy({where:{userId:userId,id:cartId}});
    }

}
