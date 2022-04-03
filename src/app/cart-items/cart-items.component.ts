import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { CartService } from '../services/cart-service.service';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  @Input() items: Book[] = [];

  empty = false;
  displayedColumns: string[] = ['image', 'title', 'price', 'qty'];
  constructor(private CartService: CartService) {
    console.log(this.items);
    if (this.items.length === 0) {
      this.empty = true;
    } else {
      this.empty = false;
      this.items = this.CartService.getCart();
    }
  }

  ngOnInit(): void {}
}
