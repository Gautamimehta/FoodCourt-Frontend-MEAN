import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private authService:AuthService,
              private formbuilder:FormBuilder,
              private router : Router) {  }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstName :['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      phone : ['',[Validators.required, Validators.minLength(10)]],
      password :['',[Validators.required, Validators.minLength(6)]],
      confirmPassword : ['',Validators.required],
      acceptTandC : [false,Validators.requiredTrue]
    }
    ,{
      validators: this.mustmatch('password','confirmPassword')
    })
  }
  get h(){
    return this.registerForm.controls;
  }
  mustmatch(controlName:string, CompareControlName:string){
    return(formGroup:FormGroup)=>{
      const password = formGroup.controls[controlName];
      const confPassword = formGroup.controls[CompareControlName];
      if(confPassword.errors &&  !confPassword.errors['mustmatch']){
        return ;
      }
      if(password.value !== confPassword.value){
        confPassword.setErrors({mustmatch :true})
      }
      else{
        confPassword.setErrors(null);
      }
  }}
  
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.table (this.registerForm.value);
    // this.authService.userLogin(this.registerForm);
    alert("Success SignUp\n")
    this.router.navigate(['/login']);
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

  onClick(){
    this.router.navigate(['/login']);
  }

  // backend
  userRegister(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }
    this.authService.register(this.registerForm)
    alert("Success");
    console.log(this.registerForm.value)
    this.router.navigate(['/login']);


    // if(this.registerForm.valid){
    //   this.authService.register(this.registerForm.value).subscribe(res=>{
    //     this.registerForm.reset();
    //     this.router.navigate(['/login']);
    //   })
    // }
  }



}



