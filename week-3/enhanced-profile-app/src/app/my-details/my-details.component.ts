/**
 * Title: my-details.component.ts
 * Author: Tiffany Reyes
 * Date: 18 Aug 2023
 * Description: my-details component
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#Typescript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Tiffany Reyes", "Pasta", "Blue")
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
