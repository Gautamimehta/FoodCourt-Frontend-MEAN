import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food/food.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  id:any;
  food:Food;
  listingSub$:Subscription;
  // header: string;
  // food:Food = {
  //   name: '',
  //   price: 0,
  //   tags: [],
  //   stars: 0,
  //   imageUrl: '',
  //   origins: [],
  //   cookTime: '',
  //   _id: ''
  // };
 
  registerForm= new FormGroup({
    _id:new FormControl("",[Validators.required]),
    name :new FormControl("",[Validators.required]),
      price :new FormControl("",[Validators.required]),
      tags :new FormControl("",[Validators.required]),
      stars :new FormControl("",[Validators.required]),
      imageUrl :new FormControl("",[Validators.required]),
      origins : new FormControl("",[Validators.required]),
      cookTime :new FormControl("",[Validators.required]),
  })

  submitted = false;

  constructor(private router:Router,
              private formbuilder:FormBuilder,
              private foodService: FoodService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.registerForm = this.formbuilder.group({
    //   id :['',Validators.required],
    //   name : ['',Validators.required],
    //   price : ['',Validators.required],
    //   tags : ['',Validators.required],
    //   stars :['',Validators.required],
    //   imageUrl : ['',Validators.required],
    //   origins : ['',Validators.required],
    //   cookTime : ['',Validators.required]
    // })
    
    // this.id= this.route.snapshot.params['id'];
    // console.log(this.id);
    // this.header = this.id==0 ?'Add Food Item':'Edit & Update';

    // if(this.id!=0){
    //   this.food = this.foodService.onGetFood(this.id);
    // }
    // this.foodService.find(this.id).subscribe((data: Food)=>{
    //   this.food = data;
    // });

  //   this.foodService.onEdit(this.food,this.id).subscribe((data: Food)=>{
  //     this.food = data;
  // });
  this.id = this.route.snapshot.paramMap.get("id");
  this.listingSub$ = this.foodService
    .getFoodById(this.id)
    .subscribe((food: Food) => {
      this.food = food;
    });
  }
  get h(){
    return this.registerForm.controls;
  }
  // onSubmit(){
  //   this.submitted = true;
  //   if(this.registerForm.invalid){
  //     return;
  //   } 
  //   let food:Food={
  //     _id: this.registerForm.value.id,
  //     name: this.registerForm.value.name,
  //     price: this.registerForm.value.price,
  //     tags: this.registerForm.value.tags,
  //     stars: this.registerForm.value.stars,
  //     imageUrl: this.registerForm.value.imageUrl,
  //     origins: this.registerForm.value.origins,
  //     cookTime: this.registerForm.value.cookTime,
  //   }   
  //   // if(this.id==0){
  //   //   this.foodService.onAdd(food);
  //   // }
  //   // else{
  //   //   this.foodService.onUpdate(food);
  //   // }
  //   this.router.navigateByUrl('/dashboard')
  // }

  // editListing(){
  //   this.id = this.route.snapshot.paramMap.get("id");
  //   if(this.registerForm.valid){
  //     this.foodService.onEdit(this.registerForm.value,this.id).subscribe(re=>{
  //       this.registerForm.reset();
  //       this.router.navigate(["/dashboard"]);
  //     })
  //   }
  // }


  editListing(){
    
    this.id = this.route.snapshot.paramMap.get("id");
    if(!this.registerForm.valid){
      this.foodService.onEdit(this.registerForm.value,this.id).subscribe(res=>{
        this.registerForm.reset();
        this.router.navigateByUrl('/dashboard')
      })
    }
    
  }


  // newListing(){
  //   if(this.registerForm.valid){
  //     console.log("first");
  //     this.foodService.onAdd(this.registerForm.value).subscribe(res=>{
  //       console.log("sec");
  //       this.registerForm.reset();
  //       this.router.navigateByUrl('/dashboard')
  //       console.log("sec");

  //     })
  //   }
  // }

  
}
