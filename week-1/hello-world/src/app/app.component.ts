/*
============================================
; Title:  component.ts
; Author: Tiffany Reyes
; Date:   10 Aug 2023
; Description: Angular application component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Tiffany's world!!";
}
