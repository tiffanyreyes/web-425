/**
 * Title: book-details-dialog.component.ts
 * Author: Tiffany Reyes
 * Date: 09 Sept 2023
 * Description: book-details-dialog component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-books-details-dialog',
  templateUrl: './books-details-dialog.component.html',
  styleUrls: ['./books-details-dialog.component.css']
})
export class BooksDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    // inject dialog reference
    private dialogRef: MatDialogRef<BooksDetailsDialogComponent>,
    // inject dialog data
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
