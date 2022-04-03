import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @Input() genre = '';

  selectedGenre(event: any) {
    this.genre = event.target.value;
  }
  @Input() books: Book[] = [];
  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {}
}
