import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailFormComponent } from './book-details/book-detail-form/book-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BookTypeDetailsComponent } from './book-type-details/book-type-details.component';
import { BookTypeDetailFormComponent } from './book-type-details/book-type-detail-form/book-type-detail-form.component';
import { HomeComponent } from './home/home.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorDetailsFormComponent } from './author-details/author-details-form/author-details-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookDetailFormComponent,
    NavbarComponent,
    BookTypeDetailsComponent,
    BookTypeDetailFormComponent,
    HomeComponent,
    AuthorDetailsComponent,
    AuthorDetailsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
