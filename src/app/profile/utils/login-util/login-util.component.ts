import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-util',
  templateUrl: './login-util.component.html',
  styleUrls: ['./login-util.component.scss']
})
export class LoginUtilComponent implements OnInit {

  passwordHide = true;

  constructor(
    private snackBar: MatSnackBar,
    private profileService: ProfileService,
    private router: Router
  ) { }

  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  // region event handlers

  passwordToggle(e): void {
    e.preventDefault();
    this.passwordHide = !this.passwordHide;
  }

  onEnterClick(){
    if (this.loginForm.valid) {
      this.loginAction();
    } else {
      this.snackBar.open('Missing username or password', null, {duration: 3000});
    }
  }

  // endregion event handlers

  // region actions

  loginAction() {
    this.profileService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (next) => {
        localStorage.setItem('user-logged', JSON.stringify(next));
        this.snackBar.open('Logged!', null, {duration: 3000});
        // @todo change provisional url
        this.router.navigate(['/toolbar-layout/']);
      },
      (err) => {
        if (err.status === 'NOT_FOUND') {
          this.snackBar.open('User not found.', null, {duration: 3000});
        } else if (err.status === 'PASSWORD_WRONG') {
          this.snackBar.open('Password or username aren\'t correct!', null, {duration: 3000});
        } else {
          this.snackBar.open('There was some kind of mistake.', null, {duration: 3000});
        }
      }
    );
  }

  // endregion actions

}
