import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // by me

  constructor(private httpClient : HttpClient) { }

  // private ROOT_URL = "http://localhost:4000/api/carts";

  // http options backend
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token")as string)
  };

  private cart:Cart =new Cart();

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find((item:any) =>
      item.food.id===food._id);
    if(cartItem){
      this.changeQuantity(food._id, cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:any):void{
    this.cart.items= this.cart.items.filter((item:any) => item.food._id !=foodId)
  }
  // delete(id:string){
  //   console.log(`${this.ROOT_URL}/${id}`);
  //   return this.httpClient.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
    
  // }

  changeQuantity(foodId:any, quantity:number){
     let cartItem= this.cart.items.find((item:any) => item.food._id===foodId)
     
     if(!cartItem) return;
     cartItem.quantity=quantity;
    }

  getCart():any{
    return this.cart;
    // return this.httpClient.get('http://localhost:4000/api/carts');
    // return this.httpClient.get<any>(this.ROOT_URL)
  }

  // by me for cart
  // getCart(){
  //   // only frontend se
  //   // return this.foods;

  //   // backend se
  //   return this.httpClient.get('http://localhost:4000/api/carts');
  //   // return this.httpClient.get<any>(this.ROOT_URL)
  // }

  
}
