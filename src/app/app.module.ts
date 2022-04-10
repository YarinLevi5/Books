import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByGenrePipe } from './pipes/filter-by-genre.pipe';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FilterByTitlePipe } from './pipes/filter-by-title.pipe';
import { FilterByPricePipe } from './pipes/filter-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    CharacterComponent,
    CharactersComponent,
    FilterByGenrePipe,
    MainComponent,
    CartItemsComponent,
    NavbarComponent,
    FilterByTitlePipe,
    FilterByPricePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdbCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
