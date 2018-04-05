import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/user/login.component.html',
})
export class LoginComponent {
  constructor(private auth:UserAuthService, private route: Router) {

  }
  onSubmit(formValue) {
    this.auth.login(formValue.userName, formValue.passWord)
    if(this.auth.isAuthenticated){
      this.route.navigate(["/events"])
    }
  }
}