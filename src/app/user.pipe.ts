import {Pipe, PipeTransform} from '@angular/core'
import { User } from './user';

@Pipe({
    name:'UserPipe'
})

export class UserFilter implements PipeTransform
{
    transform(value:any[],filterByName:string):any[] {
        filterByName=filterByName?filterByName.toLowerCase():null
        return filterByName?value.filter((developers:any)=>developers.name.toLowerCase().indexOf(filterByName)!== -1):value
    }
    
}

