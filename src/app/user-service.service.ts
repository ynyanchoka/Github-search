import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userProfile!:User;

  constructor(private http:HttpClient,) {
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
      this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token=' + environment.apiKey).toPromise().then(response=>{
        this.userProfile.url = response!.url;
        this.userProfile.login = response!.login;
        this.userProfile.html_url = response!.html_url;
        this.userProfile.location = response!.location;
        this.userProfile. public_repos = response!. public_repos;
        this.userProfile.followers = response!.followers;
        this.userProfile.following = response!.following;
        this.userProfile.created_at = response!.created_at;

        resolve()
      },
      (error)=>{

        reject(error)
      })
    })
    return promise
   }
}
