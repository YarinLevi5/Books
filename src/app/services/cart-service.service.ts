import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Book[] = [];
  constructor() {}
  addToCart(book: any) {
    this.cart.push(book);
  }
  getCart(): Book[] {
    return this.cart;
  }
}
