import {Injectable} from '@angular/core'


var developers=[{"name":"Archa","email":"arch@gmail.com","phone":123456},
{"name":"bala","email":"bala@gmail.com","phone":123456},
{"name":"raju","email":"raju@gmail.com","phone":123456},
{"name":"tweety","email":"tweety@gmail.com","phone":123456},
{"name":"krish","email":"krish@gmail.com","phone":123456},
];
@Injectable()

export class UserService
{

getData()
{
    return developers;
}
}