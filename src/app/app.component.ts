import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ContentComponent } from './shared/content/content.component';
import { Observable } from 'rxjs';
import { OrderNowComponent } from './pages/orderNow/orderNow.component';
import { PayComponent } from './pages/pay/pay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ContentComponent,
    OrderNowComponent,
    PayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
