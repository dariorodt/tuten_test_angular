import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',        component: LoginComponent },
  { path: 'login',   component: LoginComponent},
  { path: 'booking', component: BookinglistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
