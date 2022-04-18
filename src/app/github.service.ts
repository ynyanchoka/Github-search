import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from './classes/repository';
import { Observable } from 'rxjs';



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

   

   userRequest(username: string):Observable<User> {

    return this.http.get<User>(`https://api.github.com/users/${username}?client_id=${environment.apiKey}`);

  }

  repoRequest (username:string): Observable<Array<Repository>> {
    return this.http.get<Array<Repository>>(`https://api.github.com/users/${username}/repos?client_id=${environment.apiKey}`);
  }

  repoGet (repoName:string): Observable<Array<Repository>> {
    return this.http.get<Array<Repository>>(`https://api.github.com/users/${this.username}/repos?client_id=${environment.apiKey}`);
  }

   

}
