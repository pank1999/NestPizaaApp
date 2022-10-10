import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post('/register')
    addUser(@Body() user:UserDto){
      console.log(user);
      return this.userService.create(user);
     }

    @Post('login')
    getUser(@Body() loginData:{email:string,password:string}){
      console.log(loginData);
      return this.userService.findOneByEmail(loginData);
    }

  @Get('/users')
  getAllUsers(){
     return  this.userService.findAll();
  }
}
