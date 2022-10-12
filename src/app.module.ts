import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import {forwardRef} from "@nestjs/common"
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { LocalStrategy } from './modules/auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [forwardRef(() =>UserModule),
    forwardRef(() =>IngredientModule),
    forwardRef(()=>AuthModule),
     IngredientModule,
      DatabaseModule,
      ConfigModule.forRoot({ isGlobal: true }), 
    CartModule,
     OrderModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.JWTKEY,
        signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
    ],
  controllers: [AppController],
  providers: [AppService,LocalStrategy],
})
export class AppModule {}
