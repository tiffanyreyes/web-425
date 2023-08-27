/**
 * Title: app.routing.ts
 * Author: Tiffany Reyes
 * Date: 26 Aug 2023
 * Description: App routing
 */

// importing classes and modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { SignInGuard } from './sign-in.guard';

// routing for components
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }

