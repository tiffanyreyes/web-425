/**
 * Title: app.component.ts
 * Author: Tiffany Reyes
 * Date: 09 Sept 2023
 * Description: app component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }
}
