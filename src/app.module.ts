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

@Module({
  imports: [forwardRef(() =>UserModule),forwardRef(() =>IngredientModule), IngredientModule, DatabaseModule,ConfigModule.forRoot({ isGlobal: true }), CartModule, OrderModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
