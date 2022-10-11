import { itemType } from "src/interface/Ingredient";

export class OrderDto{
    readonly userId:number;
    readonly totalPrice:number;
    readonly items:itemType[];
    readonly status:string;
}