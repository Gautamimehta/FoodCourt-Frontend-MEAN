import { Food } from "./food";

export class CartItem{

    constructor( food:Food){
        this.food = food;
    }
    food:Food;
    quantity:number=1;

    // get price here works as property and not function
    get price():number{
        return this.food.price*this.quantity;
    }

}