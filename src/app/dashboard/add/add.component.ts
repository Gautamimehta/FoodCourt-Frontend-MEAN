import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food/food.service';
import { ImageUploadServiceService } from './uploadimage/image-upload-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // addproductform: any;
  registerForm: any;
  submitted = false;
  file:any;
  link:any;

  constructor(private router:Router,
              private formbuilder:FormBuilder,
              private foodService: FoodService,
              private route: ActivatedRoute,
              private fileUploadService: ImageUploadServiceService) { }

 

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      id :['',Validators.required],
      name : ['',Validators.required],
      price : ['',Validators.required],
      tags : ['',Validators.required],
      stars :['',Validators.required],
      imageUrl : ['',Validators.required],
      origins : ['',Validators.required],
      cookTime : ['',Validators.required]
    })
  }

  get h(){
    return this.registerForm.controls;
  }
  
  onChange(event:any) {
    this.file = event.target.files[0];
    this.fileUploadService.upload(this.file).subscribe(
      (data:any) => {
        console.log(data);
      this.link = data.response.path;
      console.log("lunk: "+this.link);
      }
    );
}


  newListing(){
    if(this.registerForm.valid){
      this.foodService.onAdd({
        
        name:this.registerForm.value.name,
        price:this.registerForm.value.price,
        tags:this.registerForm.value.tags,
        stars:this.registerForm.value.stars,
        imageUrl:this.link,
        origins:this.registerForm.value.origins,
        cookTime:this.registerForm.value.cookTime,
      }).subscribe(res=>{
        this.registerForm.reset();
        this.router.navigateByUrl('/dashboard')

      })
    }
  }

}
