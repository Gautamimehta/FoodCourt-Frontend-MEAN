import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private ROOT_URL = "http://localhost:4000/api/listings";

  // http options backend
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token")as string)
  };


  foods: Food[]=[
    {
      _id:1,
      name: 'Momos',
      cookTime: '10-20',
      price: 80,
      origins: ['Nepal'],
      stars: 4.5,
      imageUrl: '/assets/images/food/food-8.jpg',
      tags: ['FastFood'],
      },
    {
      _id:2,
      name: 'Fish',
      price: 200,
      cookTime: '20-30',
      origins: ['Persia', 'Middle east', ],
      stars: 4.7,
      imageUrl: '/assets/images/food/food-9.jpg',
      tags: ['Dinner', 'Lunch'],},
    {
      _id:13,
      name: 'Veg Roll',
      price: 5,
      cookTime: '10-15',
      origins: ['Germany', 'India'],
      stars: 3.5,
      imageUrl: '/assets/images/food/food-10.jpg',
      tags: ['FastFood', 'Lunch', 'Dinner'],
    },
    {
      _id:4,
      name: 'Burger',
      price: 60,
      cookTime: '10-25',
      origins: ['Belgium', 'France', 'Us'],
      stars: 4.3,
      imageUrl: '/assets/images/food/food-17.jpg',
      tags: ['FastFood', 'Fry'],
    },
    {
      _id:5,
      name: 'Chicken Soup',
      price: 150,
      cookTime: '40-50',
      origins: ['India', 'Asia'],
      stars: 3.0,
      imageUrl: '/assets/images/food/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
    },
    {
      _id:6,
      name: 'Vegetables Pizza',
      price: 150,
      cookTime: '40-50',
      origins: ['Italy'],
      stars: 4.0,
      imageUrl: '/assets/images/food/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      _id:7,
      name: 'Dhokla',
      price: 90,
      cookTime: '15-20',
      origins: ['India'],
      stars: 4.0,
      imageUrl: '/assets/images/food/food-7.png',
      tags: ['Snacks'],
    },{
      _id:8,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 100,
      origins: ['Italy'],
      stars: 4.5,
      imageUrl: '/assets/images/food/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      _id:9,
      name: 'Meatball',
      price: 70,
      cookTime: '20-30',
      origins: ['Persia', 'Middle east', 'China'],
      stars: 4.7,
      imageUrl: '/assets/images/food/food-2.jpg',
      tags: ['FastFood', 'Lunch'],
    },
    {
      _id:10,
      name: 'Hamburger',
      price: 50,
      cookTime: '10-15',
      origins: ['Germany', 'US'],
      stars: 3.5,
      imageUrl: '/assets/images/food/food-3.jpg',
      tags: ['FastFood', 'Hamburger']
    },
    {
      _id:11,
      name: 'Non veg Thali',
      price: 250,
      cookTime: '10-15',
      origins: ['India', 'US'],
      stars: 4.5,
      imageUrl: '/assets/images/food/food-11.png',
      tags: ['Lunch', 'Dinner', 'Thali']
    },
    {
      _id:12,
      name: 'South Thali Thali',
      price: 150,
      cookTime: '10-15',
      origins: ['India'],
      stars: 4.5,
      imageUrl: '/assets/images/food/food-12.jpg',
      tags: ['Lunch', 'Dinner', 'Thali']
    },
    {
      _id:13,
      name: 'Cauliflower',
      price: 100,
      cookTime: '10-15',
      origins: ['Italy','China','India'],
      stars: 3,
      imageUrl: '/assets/images/food/food-13.jpg',
      tags: ['Lunch', 'Dinner', 'FastFood']
    },
    {
      _id:14,
      name: 'Pasta',
      price: 150,
      cookTime: '10-15',
      origins: ['India', 'Italy'],
      stars: 3,
      imageUrl: '/assets/images/food/food-14.jpg',
      tags: ['Lunch', 'Dinner', 'FastFood']
    },
    {
      _id:15,
      name: 'Chicken',
      price: 150,
      cookTime: '10-15',
      origins: ['India', 'Italy', 'US'],
      stars: 4,
      imageUrl: '/assets/images/food/food-15.jpg',
      tags: ['Lunch', 'Dinner', 'FastFood']
    },
    {
      _id:16,
      name: 'Pizza',
      price: 150,
      cookTime: '10-15',
      origins: ['Italy', 'US'],
      stars: 4,
      imageUrl: '/assets/images/food/food-16.jpg',
      tags: ['Lunch', 'Dinner', 'FastFood']
    },
    {
      _id:17,
      name: 'Fried Potatoes',
      price: 60,
      cookTime: '15-20',
      origins: ['Belgium', 'France'],
      stars: 3.3,
      imageUrl: '/assets/images/food/food-4.jpg',
      tags: ['FastFood', 'Fry'],
    },
    {
      _id:18,
      name: 'Fried Rice',
      price: 150,
      cookTime: '15-20',
      origins: ['India', 'China'],
      stars: 3,
      imageUrl: '/assets/images/food/food-18.jpg',
      tags: ['Lunch', 'Dinner'],
    },
    {
      _id:19,
      name: 'Paratha',
      price: 70,
      cookTime: '15-20',
      origins: ['India'],
      stars: 5,
      imageUrl: '/assets/images/food/food-19.jpg',
      tags: ['Lunch', 'Dinner'],
    },
    {
      _id:20,
      name: 'Dal Roti',
      price: 70,
      cookTime: '15-20',
      origins: ['India'],
      stars: 4,
      imageUrl: '/assets/images/food/food-20.jpg',
      tags: ['Lunch', 'Dinner'],
    },
  ]

  constructor(private httpClient : HttpClient) { }

  getFoodById(id:any):any{
    //  frontend
    // return this.getAll().find(food=>food.id==id)!;

    // backend

    return this.httpClient.get<Food>(`${this.ROOT_URL}/${id}`);
  }
 
  getAl(){
    // only frontend se
    return this.foods;

    
  }
  getAll(){
    // only frontend se
    // return this.foods;

    // backend se
    return this.httpClient.get<any>(this.ROOT_URL)
  }

  // onGetFood(id:number):any{
  //   console.log(this.httpClient.put<any>(`${this.ROOT_URL}/${id}`,this.httpOptions));
  //   return this.httpClient.put<any>(`${this.ROOT_URL}/${id}`,this.httpOptions);
  // }
  
  
  onAdd(food:any){
    // frontend
    // this.foods.push(food)

    // backend
    return this.httpClient.post<any>(this.ROOT_URL,food,this.httpOptions)
  }

  onEdit(food:any,id:any){
    // return this.httpClient.put<any>(`${this.ROOT_URL}/${id}`,food,this.httpOptions)
    return this.httpClient.put<any>(`${this.ROOT_URL}/${id}`,food,this.httpOptions);

  }

  onDelete(id: string) {
    return this.httpClient.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
  }
  // onDelete(id:number){ 
  //   // let food = this.foods.find(x=>x.id===id);
  //   // let index = this.foods.findIndex(x=>x.id===id);
  //   // // console.log(index);
  //   // this.foods.splice(index,1);
  //    console.log("index");
  // }

  onUpdate(food:Food,id:any){
    let oldFood:any = this.httpClient.put<any>(`${this.ROOT_URL}/${id}`,food,this.httpOptions)
    oldFood.id = food._id;
    oldFood.name = food.name;
    oldFood.price = food.price;
    oldFood.cookTime = food.cookTime;
    oldFood.origins = food.origins;
    oldFood.stars = food.stars;
    oldFood.imageUrl = food.imageUrl;
    oldFood.tags = food.tags;
  }
}


