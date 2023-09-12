/**
 * Title: wishlist-create.component.ts
 * Author: Tiffany Reyes
 * Date: 10 Sept 2023
 * Description: wishlist-create component
 */

// import classes and modules
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  // declaring item variable
  item: IWishlistItem;

  // create item event emitter (component output)
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();


  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  // adding item function for title and authors
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
    this.item = {} as IWishlistItem;
  }
}
