import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { IngredientType } from 'src/interface/Ingredient';

@Table
export class Ingredient extends Model<Ingredient> implements IngredientType {

@PrimaryKey
@Column({
    allowNull:false,
    autoIncrement:true,
})    
id:number

@Column({
    type:DataType.STRING,
    allowNull:false
})
name:string

@Column({
    type:DataType.INTEGER,
    allowNull:false
})
price:number

@Column({
    type:DataType.STRING,
    allowNull:false
})
img:string

@Column({
    type:DataType.BOOLEAN,
    allowNull:false
})
isSelected:boolean
}