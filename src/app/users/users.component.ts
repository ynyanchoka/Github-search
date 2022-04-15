import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!:User;

  constructor(public userService: UserServiceService,) { }

  searchs(username: string) {
    this.userService.userRequest(username).then(
      (success)=>{
        this.user = this.userService.userProfile;
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  

  ngOnInit() {
    // this.userService. userRequest('ynynanchoka');
    // this.userProfile = this.userService.userProfile;
    this.searchs('ynyanchoka');
    
  
  }

}
