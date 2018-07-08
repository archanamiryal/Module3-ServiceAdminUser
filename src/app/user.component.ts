import {Component, OnInit,Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'user-app',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit
{
    
    title:string="User information";
    filterByName:string;
    @Input() developers;
    @Output() doChangeColors =new EventEmitter();

    constructor() { }
  
  
    changeColors(event)
    {
      console.log(event);
      this.doChangeColors.emit("Hello");
  
    }
    ngOnInit(): void {
        console.log(this.developers)
    }
}