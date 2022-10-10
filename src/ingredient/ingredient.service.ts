import { Injectable , Inject} from '@nestjs/common';
import {forwardRef} from "@nestjs/common";
import {INGREDIENT_REPOSITORY} from "../core/constants/index"
import { IngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './Ingredient.entity';



@Injectable()
export class IngredientService {
    constructor(@Inject(forwardRef(() => INGREDIENT_REPOSITORY)) private readonly ingredientRepository: typeof Ingredient) { }

    async create(IngredientData: IngredientDto) {
        console.log("ingredient service",IngredientData);
        return await this.ingredientRepository.create(IngredientData);
    }
    async findOneById(id: number): Promise<Ingredient> {
        return await this.ingredientRepository.findOne<Ingredient>({ where: { id } });
    }
    async findAllIngredient(): Promise<Ingredient[]>{
        return await this.ingredientRepository.findAll();   
    }
}
