import { Injectable } from "@angular/core";
import { IUser } from "./index";

@Injectable()
export class UserAuthService {
    currentUser: IUser
    login(userName,passWord)
    {
        this.currentUser={
            id:1,
            userName:userName,
            lastName:'dang',
            firstName:'anh'
        }
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
    }
}