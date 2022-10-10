import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { ingredientProviders } from './ingredient.providers';

@Module({
  providers: [IngredientService, ...ingredientProviders],
  controllers: [IngredientController],
  exports:[IngredientService]
})
export class IngredientModule {}
