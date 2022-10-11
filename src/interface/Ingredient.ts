export interface IngredientType{
    // id:number;
    name: string;
    price:number;
    img:string;
    isSelected:boolean;
} 

export const IngredientsColumn={
    // id:'id',
    name:'name',
    price:'price',
    img:'img',
    isSelected:'isSelected'
}

export interface itemType{
    pizza:IngredientType[]
  }