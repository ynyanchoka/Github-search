import { Component, OnInit } from '@angular/core';
import { Repository } from '../classes/repository';
import { UserServiceService } from '../github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repository!: Array<Repository>;
  constructor( public repoService: UserServiceService) { }

  repoSearch(username:any){
    this.repoService.repoRequest(username).then(
      (response)=>{
        this.repository =this.repoService.userRepo
        console.log(this.repository);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('ynyanchoka');
  }

}
