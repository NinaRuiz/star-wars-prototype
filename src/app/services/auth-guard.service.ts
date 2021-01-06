import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.isLogged();
  }

  isLogged(): boolean {
    const token = localStorage.getItem('user-logged');
    console.log(token);

    if (token == null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
