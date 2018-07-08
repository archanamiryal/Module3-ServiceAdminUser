import {Component, OnInit,Input} from '@angular/core'

@Component({
    selector:'user-app',
    templateUrl: './user.component.html'
})

export class UserComponent implements OnInit
{
    title:string="User information";
    filterByName:string;
    @Input() developers;
    ngOnInit(): void {
        console.log(this.developers)
    }

}