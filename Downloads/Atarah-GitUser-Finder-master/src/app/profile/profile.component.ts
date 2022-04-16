import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { Repo } from '../repo';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Username;
  repos:any;

  constructor(public searchService: SearchRequestService) {

   }

   searchUser(username:string){
    this.searchService.getUserProfile(username).then((success)=>{
     this.user = this.searchService.user;
    },
    (error)=>{
      console.log(error)
    });
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
