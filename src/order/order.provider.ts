import { Order} from './order.entity';
import { ORDER_REPOSITORY } from '../core/constants/index';

export const orderProviders = [{
    provide: ORDER_REPOSITORY,
    useValue: Order,
}];