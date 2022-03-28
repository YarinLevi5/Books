import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    CharacterComponent,
    CharactersComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
