import { Component, OnInit } from '@angular/core';

import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods$:Observable<any>;

  foods:Food[] = [];
  
  constructor(private foodService:FoodService,
              private route : ActivatedRoute ) {   }


  ngOnInit(): void {
    // frontend
    // this.route.params.subscribe(params =>{
    //   if(params.searchTerm)
    //     this.foods=this.foodService.getAl().filter(food=> food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
    //     // this.foods$=this.foodService.getAll().pipe(filter((food:any)=> food.name.toLowerCase().includes(params.searchTerm.toLowerCase())));
    //   else
    //     // this.foods=this.foodService.getAll();
    //     this.foods$ = this.foodService.getAll();
      
    // })

    // backend
    this.foods$ = this.foodService.getAll();

  }

}
