import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { Username } from '../username';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

 user: Username;
  repos:any;


  constructor(public searchService: SearchRequestService) { }

  searchUser(username:string){
    this.searchService.getUserRepo(username).then((success)=>{
      this.repos = this.searchService.repos;
     },
     (error)=>{
       console.log(error)
     });
  }
  ngOnInit(): void {
    this.searchUser("SharonneKemboi");
  }

}
