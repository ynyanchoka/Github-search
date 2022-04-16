import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserServiceService } from '../github.service';
import { Repository } from '../classes/repository';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userRepo!: Repository;
  userProfile!: User;
  username!: any ;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }


  searchResult(){
    this.username = this.route.snapshot.paramMap.get('username')
    this.userService.userRequest(this.username)
    this.userProfile = this.userService.userProfile
    this.userService.repoRequest(this.username)
    this.userRepo=this.userService.userRepo
  }

  ngOnInit(){
    this.searchResult()
  }

}
