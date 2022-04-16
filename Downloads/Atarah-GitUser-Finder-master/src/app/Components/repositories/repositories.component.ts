import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/classes/repos'; 
import { Users } from 'src/app/classes/users'; 
import { SearchRequestService } from 'src/app/Services/search-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

 user!: Users;
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

