import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";

// routing for components
export const AppRoutes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }

