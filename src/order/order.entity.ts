import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { IngredientType, itemType } from 'src/interface/Ingredient';

@Table
export class Order extends Model<Order> implements Order{

// @PrimaryKey
// @Column({
//     allowNull:false,
//     autoIncrement:true,
// })    
// id:number


@Column({
    type:DataType.INTEGER,
    allowNull:false
})
userId:number

@Column({
    type:DataType.INTEGER,
    allowNull:false
})
totalPrice:number

@Column({
    type:DataType.ARRAY(DataType.JSON),
    allowNull:false
})
items:itemType[]

@Column({
    type:DataType.STRING,
    allowNull:false
})
status:string

}