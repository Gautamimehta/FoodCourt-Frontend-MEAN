import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit, OnDestroy {
  // frontend
  // food!:Food

  // backend
  id:any;
  food:Food;
  listingSub$:Subscription;

  constructor(private activatedRoute:ActivatedRoute,
              private foodService : FoodService,
              private cartService: CartService,
              private router : Router) {
                // activatedRoute.params.subscribe((params)=>{
                //   if(params.id)
                //   this.food = foodService.getFoodById(params.id);
                // })
               }

  // ngOnInit(): void {
  //   // backend
  //   // console.log(this.activatedRoute.snapshot.paramMap.get("id"));
  //   this.id = this.activatedRoute.snapshot.paramMap.get("id");
  //   this.listingSub$ = this.foodService.getFoodById(this.id).subscribe((food: Food)=>{
  //     this.food=food;
  //   })
  // }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.listingSub$ = this.foodService
      .getFoodById(this.id)
      .subscribe((food: Food) => {
        this.food = food;
      });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/home/cart-page');
  }

  ngOnDestroy(): void {
    this.listingSub$.unsubscribe(); 
  }


    
  

}
