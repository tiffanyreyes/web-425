/**
 * Title: base-layout.component.ts
 * Author: Tiffany Reyes
 * Date: 11 Sept 2023
 * Description: base-layout component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {


  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }

  ngOnInit(): void {
  }

}
