import { itemType } from "./Ingredient";

export interface Order{
    userId:number,
    totalPrice:number,
    items:itemType[],
    status:string
}