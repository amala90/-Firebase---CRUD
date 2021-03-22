import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, map, filter, takeUntil } from 'rxjs/operators'
import { BookService } from 'src/app/services/book.service';

type FormAction = 'add' | 'edit';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {
  action: FormAction;
  bookForm: FormGroup;
  destroys$ = new Subject();
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      filter(p => !p.has('bookId')),
      tap(p => {
        this.action = p.get('action') as FormAction;
        this.initForm();
      }),
      takeUntil(this.destroys$),
    ).subscribe();

  }
  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }
  get formControls() { return this.bookForm.controls; }

  onSaveBook() {
    console.log('send book: ', this.bookForm.value);
    this.bookService.addBook(this.bookForm.value);
  }
  ngOnDestroy() {
    this.destroys$.next();
    this.destroys$.complete();
  }

}
