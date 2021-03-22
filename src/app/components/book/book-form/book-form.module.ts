import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormRoutingModule } from './book-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form.component';


@NgModule({
  declarations: [BookFormComponent],
  imports: [
    CommonModule,
    BookFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BookFormModule { }
