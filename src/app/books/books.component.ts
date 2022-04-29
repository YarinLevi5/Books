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
  @Input() title = '';
  @Input() price = 0;
  show = false;
  searchByTitle = '';
  searchByGenre = '';
  searchByPrice = 0;

  selectedGenre(event: any) {
    this.genre = event.target.value;
  }
  @Input() books: Book[] = [];
  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  showFilters() {
    this.show = !this.show;
  }

  filterByGenre() {
    this.searchByGenre = this.genre;
    this.searchByTitle = this.title;
    this.searchByPrice = this.price;
  }

  reset() {
    this.title = this.genre = '';
    this.price = 0;
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void { }
}
