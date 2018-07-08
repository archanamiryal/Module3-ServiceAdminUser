import { Component, OnInit } from '@angular/core';
import { UserService } from './adminuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  developers=null
  title = 'app';
  constructor(private _userServiceObj:UserService){

  }

  ngOnInit(): void {
    this.developers=this._userServiceObj.getData();
    
  }
}


