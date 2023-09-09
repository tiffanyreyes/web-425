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

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // declaring book variables
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title','numOfPages','authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }

  // function for showing book details
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
