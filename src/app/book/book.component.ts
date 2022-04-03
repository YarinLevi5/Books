import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart-service.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book?: Book;
  @Input() amount = 0;
  constructor(
    private BookService: BookService,
    private CartService: CartService
  ) {}
  increment() {
    ++this.amount;
  }
  decrement() {
    this.amount <= 0 ? (this.amount = 0) : --this.amount;
  }
  addTOCart() {
    let book = this.BookService.getBookById(this.book?.id ?? 0);
    this.CartService.addToCart(book);
  }

  ngOnInit(): void {}
}
