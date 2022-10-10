import { Cart } from './cart.entity';
import { CART_REPOSITORY } from '../core/constants/index';

export const cartProviders = [{
    provide: CART_REPOSITORY,
    useValue: Cart,
}];