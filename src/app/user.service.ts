import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from './classes/repository';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userProfile:any;
  userRepo: any;
 


  constructor(private http:HttpClient,) {
    this.userProfile = new User ("","","","","",0,0,0,"",new Date);
    this.userRepo = new Repository ("","","",0,"",new Date)
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
  
      this.http.get<ApiResponse>('https://api.github.com/users/'+username).toPromise().then((response)=>{
        this.userProfile = response;
        console.log(this.userProfile);
        resolve();
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });
  }

  repoRequest (username:string){
    interface ApiResponseRepo{
      name:string,
      html_url:string ,
      description:string,
      forks:number,
      language:string,
      created_at:Date,
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponseRepo>('https://api.github.com/users/'+username+'/repos').toPromise().then(
        (results) => {
          this.userRepo = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });

  }
        // this.userProfile.url = response!.url;
        // this.userProfile.login = response!.login;
        // this.userProfile.html_url = response!.html_url;
        // this.userProfile.location = response!.location;
        // this.userProfile. public_repos = response!. public_repos;
        // this.userProfile.followers = response!.followers;
        // this.userProfile.following = response!.following;
        // this.userProfile.created_at = response!.created_at;

      

  //       resolve()
  //     },
  //     (error)=>{
  //       this.userProfile.login= "User not found"
  //       console.log("an error occured")

  //       reject(error)
  //     })
  //   })
  //   return promise
  //  }
}
