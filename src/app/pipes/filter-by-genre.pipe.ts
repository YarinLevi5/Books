import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';
@Pipe({
  name: 'filterByGenre',
})
export class FilterByGenrePipe implements PipeTransform {
  transform(books: Book[], genre: string): Book[] {
    if (!genre) return books;
    let filterdBook = books.filter((book) => book.genre.includes(genre));
    return filterdBook;
  }
}
