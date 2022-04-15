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
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response!.quote
        this.quote.author = response!.author

        resolve()
      },
      error=>{
        this.quote.quote = "You got this"
        this.quote.author = "Francis Monari"

        reject(error)
      })
    })
    return promise
   }
}
