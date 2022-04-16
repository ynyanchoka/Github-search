import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from './classes/repository';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userProfile:any;
  userRepo: any;
  username!: any;
 
 


  constructor(private http:HttpClient,) {
    this.userProfile = new User ("","","","","",0,0,0,"",new Date);
    this.userRepo = new Repository ("","","",0,"",new Date, 0)
   }

   

   userRequest(username: string){
    interface ApiResponse{
      name:string,
      login:string, 
      html_url:string,
      bio: string,
      location:string, 
      public_repos:number,
      followers:number,
      following:number,
      avatar_url:string,
      created_at:Date
    }
    return new Promise<void> ((resolve,reject)=>{
  
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}`).toPromise().then((response)=>{
        this.userProfile = response;
        console.log(this.userProfile);
        resolve();
      },
      (error) => {
        this.userProfile.login= "User not found"
        console.log(error);
        reject();
      }
    );
  });
  }

  repoRequest (username:'ynyanchoka'){
    interface ApiResponseRepo{
      name:string,
      html_url:string ,
      description:string,
      forks:number,
      language:string,
      created_at:Date,
      watchers_count: number,
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponseRepo>(`https://api.github.com/users/${username}/repos`).toPromise().then(
        (response) => {
          this.userRepo = response;
          resolve();
        },
        (error) => {
          this.userProfile.name= "User not found"
          console.log("an error occured");
          reject();
        }
      );
    });

  }

//   getUser() {
//     return this.http.get('https://api.github.com/users/' + this.username)
//     .map(result => result);

//   }
//   getRepos() {
//     return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
//     .map(result => result);
// }
// updateUser(username: string) {
//   this.username = username;
// }
}
