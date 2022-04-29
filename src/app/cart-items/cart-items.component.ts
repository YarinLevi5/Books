
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  shoppingCart: Book[] = [];
  @Input() amount = 1
  @Input() totalPrice = '0 NIS';

  increment(id: string) {
    this.amount++
  }
  decrement(id: string) {
    this.amount--
  }

  displayedColumns: string[] = ['image', 'title', 'price', 'qty'];
  constructor(private CartService: CartService) {
    this.totalPrice = this.CartService.totalPrice()
  }

  removeBook(bookId: string) {
    this.CartService.removeBook(bookId)
  }

  ngOnInit(): void {
    this.shoppingCart = this.CartService.getCart();
    this.amount = this.CartService.qtyOfItems()
  }
}
