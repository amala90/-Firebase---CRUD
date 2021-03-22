import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Observable<Book[]>;
  booksCollection: AngularFirestoreCollection<Book>;
  constructor(
    private afs: AngularFirestore,
    private router: Router) { }
  addBook(book: Book) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('books').add(book).then(res => {
        this.router.navigate(['/book/book-list']);

      }, err => {
        reject(err);
        console.log(err);
        window.alert(err.message);
      });
    });
  }
  getBooks(): Observable<Book[]> {
    this.booksCollection = this.afs.collection('books');
    return this.books = this.booksCollection.valueChanges();


  }



}