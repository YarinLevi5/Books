import { CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() sum = 0;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.sum = this.CartService.qtyOfItems()
  }
}
