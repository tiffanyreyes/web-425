/**
 * Title: app-routing.module.ts
 * Author: Tiffany Reyes
 * Date: 29 Aug 2023
 * Description: app-routing module
 */


// import classes and modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// routing for components
const routes: Routes = [
  {path: '', redirectTo: '/composer-list', pathMatch: 'full'},
  {path: 'composer-list', component: ComposerListComponent},
  {path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
