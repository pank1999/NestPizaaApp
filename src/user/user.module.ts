import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProviders } from './users.providers';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AuthService } from 'src/modules/auth/auth.service';


@Module({
  imports:[forwardRef(()=>AuthModule)],
  providers: [UserService, ...usersProviders],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
