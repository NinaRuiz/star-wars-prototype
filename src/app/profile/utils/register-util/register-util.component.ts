import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-util',
  templateUrl: './register-util.component.html',
  styleUrls: ['./register-util.component.scss']
})
export class RegisterUtilComponent implements OnInit {

  passwordHide = true;

  constructor() { }

  ngOnInit(): void {
  }

  passwordToggle(e): void {
    e.preventDefault();
    this.passwordHide = !this.passwordHide;
  }

}
