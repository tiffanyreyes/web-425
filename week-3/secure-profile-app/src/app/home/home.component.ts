/**
 * Title: home.component.ts
 * Author: Tiffany Reyes
 * Date: 26 Aug 2023
 * Description: Home component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // declaring variable
  isLoggedIn: boolean = true;

  // route navigation for loggedin
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
