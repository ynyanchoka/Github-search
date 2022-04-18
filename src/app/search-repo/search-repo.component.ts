import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../classes/repository';
import { User } from '../classes/user';
import { UserServiceService } from '../github.service';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  userRepo!: Array<Repository>;
  userProfile!: User;
  repository!: Repository;
  searchForm: FormGroup = new FormGroup({
    "reponame": new FormControl("Quotes", Validators.required)
  });

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  searchGet() {
    let inputValue = this.searchForm.get("reponame")?.value;
    
    this.userService.repoRequest(inputValue).subscribe((res: Array<Repository>) => {
      this.userRepo = res;
    });
  }

  ngOnInit(): void {
    this.searchGet();
  }

}
