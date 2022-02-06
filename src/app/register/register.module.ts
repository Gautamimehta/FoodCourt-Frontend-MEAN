import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }


