import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  constructor() {
    this.books = [
      {
        title: 'sea',
        characters: [
          {
            name: 'yarin',
            age: 21,
          },
        ],
        date: new Date('1999-09-19'),
      },
      {
        title: 'book title',
        characters: [
          {
            name: 'lee',
            age: 54,
          },
        ],
        date: new Date('2008-01-29'),
      },
    ];
  }
  getBooks(): Book[] {
    return this.books;
  }
}
