/**
 * Title: composer-list.component.ts
 * Author: Tiffany Reyes
 * Date: 20 Aug 2023
 * Description: composer-list component
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
  toString() {
    console.log(`\n Full Name: ${this.fullName}\n Genre: ${this.genre}`);
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Ludwig Van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Antonio Vivaldi", "Classical")
    ];
  }

  ngOnInit(): void {
  }

}
