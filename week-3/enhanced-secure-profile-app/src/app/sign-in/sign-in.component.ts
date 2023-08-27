/**
 * Title: sign-in.component.ts
 * Author: Tiffany Reyes
 * Date: 26 Aug 2023
 * Description: sign-in component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // adding angular router
  constructor(private router: Router) {}

  // declaring variable
  isLoggedIn: Boolean = false;


  ngOnInit(): void {
  }

  // sign in navigation
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
