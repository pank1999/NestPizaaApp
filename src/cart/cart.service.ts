import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CART_REPOSITORY } from 'src/core/constants';
import { Cart } from './cart.entity';
import { CartDto } from './dto/cart.dto';

@Injectable()
export class CartService {
    constructor(@Inject(forwardRef(() => CART_REPOSITORY)) private readonly cartRepository: typeof Cart) { }

    async create(cartData: CartDto): Promise<Cart> {
        return await this.cartRepository.create<Cart>(cartData);
    }
    async findByUserId(userId: number): Promise<Cart> {
        return await this.cartRepository.findOne<Cart>({ where: { userId } });
    }
    async findAllIngredient(): Promise<Cart[]>{
        return await this.cartRepository.findAll();   
    }
}
