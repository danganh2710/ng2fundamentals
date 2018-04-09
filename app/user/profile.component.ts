import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: "app/user/profile.component.html"
})
export class ProfileComponent implements OnInit {
  constructor(private userAuth: UserAuthService, private router: Router) {

  }
  profile: FormGroup
  ngOnInit(): void {
    let firstName = new FormControl(this.userAuth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')])
    let lastName = new FormControl(this.userAuth.currentUser.lastName, Validators.required)
    this.profile = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  onSubmit(formValues){
    if(this.profile.valid){
      this.userAuth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['/events'])
    }
  }
}
