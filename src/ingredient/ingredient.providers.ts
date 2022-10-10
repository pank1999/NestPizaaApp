import { Ingredient } from './Ingredient.entity';
import { INGREDIENT_REPOSITORY } from '../core/constants/index';

export const ingredientProviders = [{
    provide: INGREDIENT_REPOSITORY,
    useValue: Ingredient,
}];