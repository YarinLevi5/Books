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
        id: '1',
        title: 'Fast And Fuirous',
        characters: [
          {
            name: 'john',
            age: 55,
          },
        ],
        genre: 'action',
        image: 'assets/images/fastAndFurious.jpg',
        price: 210,
        quantity: 0,
      },
      {
        id: '2',
        title: 'Cinderella',
        characters: [
          {
            name: 'bell',
            age: 28,
          },
        ],
        genre: 'drama',
        image: 'assets/images/cinderella.jpg',
        price: 70,
        quantity: 0,
      },
      {
        id: '3',
        title: 'Harry Potter',
        characters: [
          {
            name: 'harry',
            age: 16,
          },
        ],
        genre: 'fantasy',
        image: 'assets/images/hp.jpg',
        price: 120,
        quantity: 0,
      },
    ];
  }
  getBooks(): Book[] {
    return this.books;
  }
  getBookById(id: string) {
    let book = this.books.find((book) => book.id === id);
    return book;
  }
}
