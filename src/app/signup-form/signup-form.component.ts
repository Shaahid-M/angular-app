import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({//added new group for multiple formControls [not mandatory]
      username: new FormControl('', [
       Validators.required,
       Validators.minLength(3),
       UsernameValidators.cannotContainSpace
     ],
       //async validators:
       UsernameValidators.shouldBeUnique
     ),
     password: new FormControl('', Validators.required) 
    })

  })

  login() {
    this.form.setErrors({
      invalidLogin: true
    })
  }

  log(x: any) {
    console.log(x);
  }

  get username() {//still does not allow data to be used in front-end
    return this.form.get('account.username');
  }

  validateUsername(x: any, errorCode: string) {

    //console.log(x.touched);
    if (errorCode === "default")
        return (x.touched && x.invalid);
    else if (errorCode === "pending")
        return (x.pending);
    else if (errorCode === 'required')
        return (x.errors.required ? true : false)
    else if (errorCode === 'minlength')
      return (x.errors.minlength ? true : false)
    else if (errorCode === 'whitespace')
      return (x.errors.cannotContainSpace ? true : false)
    else if (errorCode === 'shouldBeUnique')
      return (x.errors.shouldBeUnique);
    return false;
  }
}
