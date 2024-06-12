import { Routes } from '@angular/router';
import { OrderNowComponent } from './pages/orderNow/orderNow.component';
import { PayComponent } from './pages/pay/pay.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: ' ', component: MainComponent },
  {
    path: 'orderNow',
    component: OrderNowComponent,
  },
  {
    path: 'pay',
    component: PayComponent,
  },
  { path: '**', component: NotFoundComponent },
];
