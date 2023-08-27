/**
 * Title: sign-in.guard.ts
 * Author: Tiffany Reyes
 * Date: 26 Aug 2023
 * Description: sign-in guard
 */

// import classes and modules
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {

  }

  // guard function navigation conditions
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn == 'true') {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }



}
