import { CartService } from 'src/app/services/cart.service';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private shoppingCart: Book[] = [];
  constructor() { }

  addToCart(book: any): void {
    let isExist = this.shoppingCart.find(bookIdx => bookIdx.id === book.id);
    if (!isExist) {
      this.shoppingCart.push(book);
    } else {
      isExist.quantity++
    }
  }
  getCart(): Book[] {
    return this.shoppingCart;
  }

  qtyOfItems(): number {
    let qtyOfBooks = 0;
    this.shoppingCart.forEach(book => {
      qtyOfBooks += book.quantity
    });
    return qtyOfBooks
  }

  totalPrice(): string {
    let total = 0;
    this.shoppingCart.forEach(book => {
      total += book.price * book.quantity
    });
    let nis = 'NIS'
    return `${total} ${nis}`;
  }

  removeBook(bookId: string): Book[] {
    let idx = this.shoppingCart.findIndex((book) => book.id === bookId)

    return this.shoppingCart.splice(idx, 1)
  }

}

