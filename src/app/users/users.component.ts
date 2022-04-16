import { Component, OnInit } from '@angular/core';
import { Repository } from '../classes/repository';
import { User } from '../classes/user';
import { UserServiceService } from '../github.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!:User;
  repository!:Repository;
 

  constructor(public userService: UserServiceService,public repoService:UserServiceService) { }

  searchquerry(username: any) {
    this.userService.userRequest(username).then(
      ()=>{
        this.user = this.userService.userProfile;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.repoRequest(username).then(
      (response)=>{
        this.repository = this.repoService.userRepo;
      
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  
  

  ngOnInit() {
    // this.userService. userRequest('ynynanchoka');
    // this.userProfile = this.userService.userProfile;
    this.searchquerry('ynyanchoka');
    
  
  }

}
