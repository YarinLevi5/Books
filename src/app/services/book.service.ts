import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private shoppingCart: Book[] = [];
  constructor() {
    this.books = [
      {
        id: 1,
        title: 'Fast And Fuirous',
        characters: [
          {
            name: 'john',
            age: 55,
          },
        ],
        date: new Date('1999-09-19'),
        genre: 'action',
        image: 'assets/images/fastAndFurious.jpg',
        price: 210,
      },
      {
        id: 2,
        title: 'Cinderella',
        characters: [
          {
            name: 'bell',
            age: 28,
          },
        ],
        date: new Date('2008-01-29'),
        genre: 'drama',
        image: 'assets/images/cinderella.jpg',
        price: 70,
      },
      {
        id: 3,
        title: 'Harry Potter',
        characters: [
          {
            name: 'harry',
            age: 16,
          },
        ],
        date: new Date('2002-09-10'),
        genre: 'fantasy',
        image: 'assets/images/hp.jpg',
        price: 120,
      },
    ];
  }
  getBooks(): Book[] {
    return this.books;
  }
  getBookById(id: number) {
    let book = this.books.find((book) => book.id === id);
    return book;
  }
  addToCart(book: any) {
    this.shoppingCart.push(book);
  }
  getCart(): Book[] {
    return this.shoppingCart;
  }
}
