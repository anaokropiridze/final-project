import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderNowComponent } from '../orderNow/orderNow.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [OrderNowComponent, CommonModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss',
})
export class PayComponent {
  totalPriceOutput: number = 0;
  cartItems: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCartItems();
    this.getTotalPrice();
  }

  getCartItems() {
    const apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets/GetAll';
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.cartItems = response;
      },

      (error) => {
        console.error('Error fetching cart items: ', error);
      }
    );
  }

  getTotalPrice(): number {
    const prices = this.cartItems.map((product) => product.price);
    const totalPrice = prices.reduce((acc, price) => acc + price, 10);
    this.totalPriceOutput = totalPrice;
    return totalPrice;
  }
}
