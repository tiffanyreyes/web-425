/**
 * Title: book-list.component.ts
 * Author: Tiffany Reyes
 * Date: 09 Sept 2023
 * Description: book-list component
 */

//importing classes and modules
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BooksDetailsDialogComponent } from '../books-details-dialog/books-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // declaring book variables
  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res)
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    });
  }

  ngOnInit(): void {
  }

  // function for showing book details pop up
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const dialogRef = this.dialog.open(BooksDetailsDialogComponent, { data: { book: this.book }, width: '800px', disableClose: true });
    dialogRef.afterClosed().subscribe(result => { if (result === 'confirm') { this.book = null; } });
  }
}
