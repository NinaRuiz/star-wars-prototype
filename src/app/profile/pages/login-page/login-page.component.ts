import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../../services/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authGuard: AuthGuardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authGuard.isLogged()) {
      this.router.navigate(['starship']);
    }
  }

}
