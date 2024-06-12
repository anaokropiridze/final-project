import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContentComponent } from '../../shared/content/content.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PayComponent } from '../pay/pay.component';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ContentComponent,
    CommonModule,
    PayComponent,
  ],
  templateUrl: './orderNow.component.html',
  styleUrl: './orderNow.component.scss',
})
export class OrderNowComponent implements OnInit {
  totalPriceOutput: number = 0;

  // router: any;
  // goToPay() {
  //   throw new Error('Method not implemented.');
  // }
  // deleteFromCart(arg0: any) {
  //   throw new Error('Method not implemented.');
  // }
  cartItems: any[] = [];
  totalPrice: number = 0;
  apiUrl: any;
  product: any;
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

  deleteFromCart(productId: string) {
    const apiUrl = `https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${productId}`;

    this.http.delete(apiUrl).subscribe(
      (response: any) => {
        console.log('Deleted from cart successfully:', response);
        window.location.reload();
      },
      (error) => {
        console.error('There was a problem deleting from cart:', error);
        // Handle error
      }
    );
  }

  // goTopay() {
  //   const totalPrice = this.getTotalPrice();
  //   this.router.navigate(['/pay'], { queryParams: { amount: totalPrice } });
  // }
}
