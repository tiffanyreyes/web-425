/**
 * Title: wishlist.component.ts
 * Author: Tiffany Reyes
 * Date: 10 Sept 2023
 * Description: wishlist component
 */

// import classes and modules
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  // declaring item variable with array
  items: Array<IWishlistItem> = []


  constructor() {}

  ngOnInit(): void {
  }
  // update function for wishlist items added
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item)
  }


}
