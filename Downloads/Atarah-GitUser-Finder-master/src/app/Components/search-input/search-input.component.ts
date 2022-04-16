import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchRequestService } from '../../Services/search-request.service'
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {


  public userQuery!: string;
  @Output() searchResult = new EventEmitter<any>() 

  constructor() { }

  searchUser(){
    this.searchResult.emit(this.userQuery);
  }

  ngOnInit(): void {
  }

}
