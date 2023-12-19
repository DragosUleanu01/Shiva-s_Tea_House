import { Injectable } from '@angular/core';
import {Tea} from '../../shared/models/Tea';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  constructor() { }

  getAll():Tea[]
  {
    return [
     { 
      id:0,
      name:'Kashmiri Tea',
      price:100,
      stars:5,
      imageUrl:'/assets/images/tea1.png',
      origins:['India'],
     },
     { 
      id:1,
      name:'Lavender Tea',
      price:80,
      stars:4.5,
      imageUrl:'/assets/images/tea2.png',
      origins:['India',"China","Afghanistan"],
     },
     { 
      id:2,
      name:'Earl Grey',
      price:50,
      stars:4.0,
      imageUrl:'/assets/images/tea3.jpg',
      origins:['British India Company'],
     },
     { 
      id:3,
      name:'Bombai Cutting Chai',
      price:150,
      stars:5,
      imageUrl:'/assets/images/tea4.png',
      origins:['India'],
     },
     { 
      id:4,
      name:'Romeo and Juliette Cigars',
      price:350,
      stars:5,
      imageUrl:'/assets/images/cig.jpg',
      origins:['Kuala Lumpur'],
     },
  
  ]
  }
}
