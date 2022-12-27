import {IngredientType} from "../../interface/Ingredient";

export class CartDto{
    readonly userId?:number;
    readonly TotalPrice?:number;
    readonly IngQuantity?:number;
    readonly IngArray?:IngredientType[]
}