import { Body, Controller, Get, Post } from '@nestjs/common';
import { IngredientDto } from './dto/ingredient.dto';
import { IngredientService } from './ingredient.service';


@Controller('Ingredient')
export class IngredientController {
    
   constructor(private ingredientService:IngredientService){}

  @Get()
  getAllIngredient(){
      return this.ingredientService.findAllIngredient();
  }

  @Post()
  createIngredinet(@Body() ingredientData:IngredientDto){
    console.log(ingredientData);
    return this.ingredientService.create(ingredientData);
  }

}
