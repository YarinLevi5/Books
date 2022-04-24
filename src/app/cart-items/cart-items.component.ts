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
  @Input() amount = 0
  @Input() totalPrice = '0 NIS';

  increment() {
    ++this.amount
  }
  decrement() {
    this.amount <= 0 ? (this.amount = 0) : --this.amount;
  }

  displayedColumns: string[] = ['image', 'title', 'price', 'qty'];
  constructor(private CartService: CartService) {
    this.totalPrice = this.CartService.totalPrice()
  }

  ngOnInit(): void {
    this.shoppingCart = this.CartService.getCart();
  }
}
