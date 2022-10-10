import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Ingredient } from 'src/ingredient/Ingredient.entity';
import { IngredientsColumn, IngredientType } from 'src/interface/Ingredient';

@Table
export class Cart extends Model<Cart> {

@Column({
    type:DataType.INTEGER,
    allowNull:false
})
userId:number

@Column({
    type:DataType.INTEGER,
    allowNull:false
})
TotalPrice:number

@Column({
    type:DataType.INTEGER,
    allowNull:false
})
IngQuantity:number

@HasMany(()=> Ingredient,{foreignKey:IngredientsColumn.id})
Ingredients:Ingredient

}