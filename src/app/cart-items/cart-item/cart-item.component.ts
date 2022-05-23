import { CartService } from 'src/app/services/cart.service';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem?: Book;
  constructor(private CartService: CartService) { }

  increment() {
    ++this.cartItem!.quantity
  }
  decrement() {
    --this.cartItem!.quantity
  }

  removeBook(bookId: string) {
    this.CartService.removeBook(bookId)
  }


}
