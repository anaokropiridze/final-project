import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ContentComponent } from '../../shared/content/content.component';
import { CommonModule } from '@angular/common';
import { MealCardService } from '../../services/meal-card.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ContentComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  products: any[] = [];
  error: string | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private mealCard: MealCardService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  //
  getProducts() {
    this.mealCard.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        this.error = 'Failed to fetch products';
        console.error(error);
      }
    );
  }

  //
  categories: any[] = [''];
  getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
  //

  addToCart(productId: string, productPrice: number) {
    const apiUrl = 'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket';

    // Body data
    const bodyData = {
      quantity: 1,
      price: productPrice,
      productId: productId,
    };

    // Send POST request
    this.http.post(apiUrl, bodyData).subscribe(
      (response: any) => {
        console.log('Added to cart successfully:', response);
        // Do something with the response data if needed
      },
      (error) => {
        console.error('There was a problem adding to cart:', error);
        // Handle error
      }
    );
  }
}
