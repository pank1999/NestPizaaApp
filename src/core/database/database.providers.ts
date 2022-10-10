import { Sequelize } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.entity';
import { Ingredient } from 'src/ingredient/Ingredient.entity';
import { User } from 'src/user/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from "../constants/index";
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User,Ingredient,Cart]);
        await sequelize.sync();
        return sequelize;
    },
}];