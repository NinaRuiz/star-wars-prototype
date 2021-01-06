import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProfileModel} from '../../models/profile-model';

@Component({
  selector: 'app-register-util',
  templateUrl: './register-util.component.html',
  styleUrls: ['./register-util.component.scss']
})
export class RegisterUtilComponent implements OnInit {

  passwordHide = true;

  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  constructor(
    private profileService: ProfileService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // region event handlers

  onRegisterClick(): void {
    if (this.registerForm.valid) {
      this.saveModel();
    } else {
      this.snackbar.open('Please, complete the form by answering the red fields.', null, {duration: 3000});
    }
  }

  passwordToggle(e): void {
    e.preventDefault();
    this.passwordHide = !this.passwordHide;
  }

  // endregion event handlers

  // region actions

  saveModel(): void {
    if (this.registerForm.value.password === this.registerForm.value.repeatPassword) {

      const model = new ProfileModel();
      model.username = this.registerForm.value.username;
      model.firstName = this.registerForm.value.firstName;
      model.lastName = this.registerForm.value.lastName;
      model.password = this.registerForm.value.password;

      this.profileService.create(model).subscribe(
        (next) => {
          this.snackbar.open("Created user");
          console.log(next);

          // @todo add router to login page
        },
        (err) => {
          if (err.status === 'ERROR_UNIQUE') {
            this.snackbar.open("That username already exist.", null, {duration: 3000});
          } else {
            this.snackbar.open("There was some kind of error", null, {duration: 3000});
            console.log(err.message);
          }
        }
      );
    }else{
      this.snackbar.open('Passwords are not the same.', null, {duration: 3000});
    }
  }

  // endregion actions

}
