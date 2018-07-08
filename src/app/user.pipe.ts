import {Pipe, PipeTransform} from '@angular/core'
import { User } from './user';

@Pipe({
    name:'UserPipe'
})

export class UserFilter implements PipeTransform
{
    transform(value:User[],filterByName:string):User[] {
        filterByName=filterByName?filterByName.toLowerCase():null
        return filterByName?value.filter((developers:User)=>developers.name.toLowerCase().indexOf(filterByName)!== -1):value
    }
    
}

