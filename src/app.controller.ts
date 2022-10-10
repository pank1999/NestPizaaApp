import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IngredientDto } from './ingredient/dto/ingredient.dto';
import { IngredientService } from './ingredient/ingredient.service';
import { UserDto } from './user/dto/user.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService , private userService:UserService , private ingredientService:IngredientService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



}
