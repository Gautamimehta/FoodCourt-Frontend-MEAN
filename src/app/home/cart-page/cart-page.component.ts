import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  // Google pay method
  buttonColor = "black";
  buttonType="buy";
  isCustomSize=250;
  buttonHeight =50;
  isTop =window===window.top;

  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:"CARD",
        paramerters:{
          allowedPaymentMethod:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
        },
        tokenization:{
          type:"PAYMENT_GATEWAY",
          paramerters:{
            gateway:"example",
            gatewayMerchantI:"exampleGatewayMerchantId",
          }
        }
      }
    ],
    maerchatInfo:{
      merchantId:"12345678901234567890",
      merchnatName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalprice: "CartItem.price.toString()",
      currenyCode:"INR",
      countryCode:"IN"
    }
  };
  onLoadPaymentData(event:any):void{
    console.log("Payment Data",event.details);
  }
  

  cart!:Cart;
  // cart!:Observable<any>;

  constructor(private cartService: CartService,
    private foodService:FoodService) {
      
     this.setCart();
   }

  ngOnInit(): void {
    // console.log("wfqtu")
    // this.cart = this.cartService.getCart();
    // this.cart = this.foodService.getAll();
    
  }

  removeFromCart(cartItem:CartItem){
    console.log(cartItem._id);
    // this.cartService.delete(cartItem._id)
    this.cartService.removeFromCart(cartItem.food._id);
    this.setCart();
  }
  

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food._id,quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
 

}
