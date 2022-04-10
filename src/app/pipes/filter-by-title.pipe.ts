import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';
@Pipe({
  name: 'filterByTitle',
})
export class FilterByTitlePipe implements PipeTransform {
  transform(books: Book[], title: string): Book[] {
    if (!title) return books;
    if (!books) return [];
    let filteredBook = books.filter((book) =>
      book.title.toLowerCase().trim().includes(title)
    );
    return filteredBook;
  }
}
