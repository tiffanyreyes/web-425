/**
 * Title: composer.class.ts
 * Author: Tiffany Reyes
 * Date: 25 Aug 2023
 * Description: composer class
 */

import { IComposer } from './composer.interface';

// creating composer class
export class Composer {
  composers: Array<IComposer>;
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Antonio Vivaldi", genre: "Classical"
      }
    ];
  }

  // function to return composer array
  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
      }
  }
}
