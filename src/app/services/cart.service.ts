import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private shoppingCart: Book[] = [];
  private static qty: number = 0;
  constructor() { }

  addToCart(book: any): void {
    let isExist = this.shoppingCart.find(bookIdx => bookIdx.id === book.id);
    if (!isExist) {
      this.shoppingCart.push(book);
    } else {
      book.quantity++
      CartService.qty++;
    }
  }
  getCart(): Book[] {
    return this.shoppingCart;
  }

  qtyOfItems(): number {
    return CartService.qty;
  }

  totalPrice(): string {
    let total = 0;
    this.shoppingCart.forEach(book => {
      total += book.price
    });
    let nis = 'NIS'
    return `${total} ${nis}`;
  }

}
