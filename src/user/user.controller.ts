import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService:UserService,private authService:AuthService){}

    @Post('/register')
    addUser(@Body() user:UserDto){
      console.log(user);
      //return this.userService.create(user);
      return this.authService.create(user);
     }

    @Post('login')
    getUser(@Body() loginData:{email:string,password:string}){
      console.log(loginData);
      return this.userService.findOneByEmail(loginData);
      //return this.authService.login(loginData);
    }

  @Get('/users')
  getAllUsers(){
     return  this.userService.findAll();
  }
}
