import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private shoppingCart: Book[] = [];
  constructor() {}

  addToCart(book: any) {
    this.shoppingCart.push(book);
  }
  getCart(): Book[] {
    return this.shoppingCart;
  }
}
