import {IngredientType} from "../../interface/Ingredient";

export class CartDto{
    readonly id:number;
    readonly TotalPrice:number;
    readonly IngQuantity:number;
    readonly IngArray:IngredientType[]
}