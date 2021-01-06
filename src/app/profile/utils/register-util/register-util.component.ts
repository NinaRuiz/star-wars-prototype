import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileModel} from '../../models/profile-model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-util',
  templateUrl: './register-util.component.html',
  styleUrls: ['./register-util.component.scss']
})
export class RegisterUtilComponent implements OnInit {

  passwordHide = true;

  public form = new FormGroup({
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
    if (this.form.valid) {
      this.saveModel();
    }
  }

  passwordToggle(e): void {
    e.preventDefault();
    this.passwordHide = !this.passwordHide;
  }

  // endregion event handlers

  // region actions

  saveModel(): void {
    if (this.form.value.password === this.form.value.repeatPassword) {
      console.log('EQUALS');
    }else{
      this.snackbar.open('Passwords are not the same.', null, {duration: 3000});
    }
  }

  // endregion actions

}
