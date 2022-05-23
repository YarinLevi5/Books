import { BooksRoutingRoutingModule } from './books-routing/books-routing-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterByGenrePipe } from './pipes/filter-by-genre.pipe';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FilterByTitlePipe } from './pipes/filter-by-title.pipe';
import { FilterByPricePipe } from './pipes/filter-by-price.pipe';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { StoreComponent } from './pages/store/store.component';
import { CartItemComponent } from './cart-items/cart-item/cart-item.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    CharacterComponent,
    CharactersComponent,
    FilterByGenrePipe,
    CartItemsComponent,
    NavbarComponent,
    FilterByTitlePipe,
    FilterByPricePipe,
    HomeComponent,
    CartComponent,
    StoreComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdbCheckboxModule,
    BooksRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
