import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  shoppingCart: Book[] = [];
  @Input() amount = 0;

  increment() {
    ++this.amount;
  }
  decrement() {
    this.amount <= 0 ? (this.amount = 0) : --this.amount;
  }

  displayedColumns: string[] = ['image', 'title', 'price', 'qty'];
  constructor(private BookService: BookService) {
    this.shoppingCart = this.BookService.getCart();
  }

  ngOnInit(): void {}
}
