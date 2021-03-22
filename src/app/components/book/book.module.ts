import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListModule } from './book-list/book-list.module';
import { BookFormModule } from './book-form/book-form.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookRoutingModule,
    BookListModule,
    BookFormModule
  ]
})
export class BookModule { }
