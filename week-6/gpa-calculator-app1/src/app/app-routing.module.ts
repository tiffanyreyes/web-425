/**
 * Title: app-routing.module.ts
 * Author: Tiffany Reyes
 * Date: 11 Sept 2023
 * Description: app-routing module
 */

// importing classes and modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: BaseLayoutComponent,
    children: [{path: '', component: HomeComponent}]
  },
  {
    path:'session',
    component: AuthLayoutComponent,
    children: [{path: 'not-found', component: NotFoundComponent}]
  },
  {
    path:'**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
