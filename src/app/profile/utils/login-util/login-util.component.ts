import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-util',
  templateUrl: './login-util.component.html',
  styleUrls: ['./login-util.component.scss']
})
export class LoginUtilComponent implements OnInit {

  passwordHide = true;

  constructor() { }

  ngOnInit(): void {
  }

  // region event handlers

  passwordToggle(e): void {
    e.preventDefault();
    this.passwordHide = !this.passwordHide;
  }

  // endregion event handlers

}
