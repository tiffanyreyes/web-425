/**
 * Title: composer.service.ts
 * Author: Tiffany Reyes
 * Date: 01 Sept 2023
 * Description: composer service
 */

// importing classes and interfaces
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// declaring ComposerService class
export class ComposerService {

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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  // function for filtering of composer array
  filterComposers(name: string): Observable<IComposer[]> {
    // Apply lowercase to name as well to account for user input in either casing.
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)))
  }

  getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
      }
  }

}
