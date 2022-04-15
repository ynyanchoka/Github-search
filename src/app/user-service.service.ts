import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userProfile!:User;

  constructor(http:HttpClient,) {
    this.userProfile = new User ("","","","",0,0,0,"",new Date);
   }

   userRequest(){
    interface ApiResponse{
      url:string,
      login:string, 
      html_url:string,
      location:string, 
      public_repos:number,
      followers:number,
      following:number,
      avatar_url:string,
      created_at:Date
    }
   }
}
