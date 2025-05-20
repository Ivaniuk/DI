import { Component } from '@angular/core';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  imports: [AddBookComponent, BooksListComponent],
})
export class BooksComponent {}
