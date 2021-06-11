import { BookDetailsComponent } from './book-details/book-details.component';
import { BookTypeDetailsComponent } from './book-Type-details/book-Type-details.component';
import { HomeComponent } from "src/app/home/home.component";
import { AuthorDetailsComponent } from "./author-details/author-details.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path : 'Books', component : BookDetailsComponent },
{path : 'BookTypes', component : BookTypeDetailsComponent },
{path : '', component : HomeComponent },
{path : 'Authors', component : AuthorDetailsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
