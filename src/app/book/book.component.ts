import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book?: Book;

  constructor(private BookService: BookService) {}

  addTOCart() {
    let book = this.BookService.getBookById(this.book?.id ?? 0);
    this.BookService.addToCart(book);
  }

  ngOnInit(): void {}
}
