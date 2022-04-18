import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserServiceService } from '../github.service';
import { Repository } from '../classes/repository';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userRepo!: Array<Repository>;
  userProfile!: User;
  repository!: Repository;
  searchForm: FormGroup = new FormGroup({
    "username": new FormControl("ynyanchoka", Validators.required),
  
  });

  constructor(private route: ActivatedRoute, private userService: UserServiceService) {}
 


  searchResult(){

    let inputValue = this.searchForm.get("username")?.value;
    this.userService.userRequest(inputValue).subscribe((res: User) => {
      this.userProfile = res;
    });
    this.userService.repoRequest(inputValue).subscribe((res: Array<Repository>) => {
      this.userRepo = res;
    });
  }

  ngOnInit(){
    this.searchResult()
  }

}
