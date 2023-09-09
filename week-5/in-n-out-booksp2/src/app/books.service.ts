/**
 * Title: book.service.ts
 * Author: Tiffany Reyes
 * Date: 09 Sept 2023
 * Description: book service
 */

//importing classes and modules
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //declaring book variables
  books: Array<IBook>;

  constructor() {
    //book objects and their categories
    this.books = [
      {
        isbn: '9780451530783',
        title: 'Pride and Prejudice',
        description: 'A story set in 18th century England about Elizabeth Bennet, a woman whose mother and society pressures her to find a husband for security and fortune, and Mr. Darcy, whose aloof and prideful nature is overshadowed by his wealth and connections.',
        numOfPages: 400,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780451530837',
        title: 'Persuasion',
        description: 'A story of Anne Elliot, a woman who rejected a proposal to Captain Wentworth who was the love of her life. Eight years later she runs into him and has to pose the question if she made the right decision.',
        numOfPages: 304,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780451530820',
        title: 'Emma',
        description: 'A story of a young self assured woman who is sure that she is immune to love so she then tries to make matchmaking for everyone else even if the attempts are poor.',
        numOfPages: 448,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780451531018',
        title: 'Sense and Sensibility',
        description: 'A story of two sisters of opposite personalities who are going through life, love, and hardship.',
        numOfPages: 336,
        authors: ['Jane Austen']
      },
      {
        isbn: '9780451531117',
        title: 'Mansfield Park',
        description: 'Fanny Price was always looked at as inferior to the rest of her family. As she she grows older and grows into who she is as a person she gets involved with the intricacies of being wanted romantically.',
        numOfPages: 416,
        authors: ['Jane Austen']
      }
    ]
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for(let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
