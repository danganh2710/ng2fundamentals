import { Component } from "@angular/core";
import { UserAuthService } from "../user/user-auth.service";

@Component({
    selector:'event-nav',
    templateUrl:'app/nav/navbar.component.html',
    styleUrls:['app/nav/navbar.component.css']
})
export class NavComponent{
    constructor(private auth:UserAuthService){

    }


}