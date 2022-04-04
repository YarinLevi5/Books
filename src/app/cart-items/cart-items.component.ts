import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  items: Book[] = [];
  @Input() amount = 0;
  increment() {
    ++this.amount;
  }
  decrement() {
    this.amount <= 0 ? (this.amount = 0) : --this.amount;
  }
  empty = false;
  displayedColumns: string[] = ['image', 'title', 'price', 'qty'];
  constructor(private BookService: BookService) {
    if (this.items.length === 0) {
      this.empty = true;
    } else {
      this.items = this.BookService.getCart();
      console.log(this.items);
    }
  }

  ngOnInit(): void {}
}
