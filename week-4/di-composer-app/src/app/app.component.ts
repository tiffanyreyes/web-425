/**
 * Title: app.component.ts
 * Author: Tiffany Reyes
 * Date: 29 Aug 2023
 * Description: app component
 */


import { Component } from '@angular/core';

// root component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
