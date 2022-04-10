import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';
@Pipe({
  name: 'filterByPrice',
})
export class FilterByPricePipe implements PipeTransform {
  transform(books: Book[], price: number): Book[] {
    if (!price) return books;
    if (!books) return [];
    let filteredBook = books.filter((book) => book.price <= price);
    return filteredBook;
  }
}
