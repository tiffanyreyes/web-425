/**
 * Title: composer-details.component.ts
 * Author: Tiffany Reyes
 * Date: 25 Aug 2023
 * Description: composer details component
 */

// importing classes
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // declaring variables
  composerId: number;
  composer: IComposer;

  // set composerId from URL
  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // statement to check the composerId value
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
