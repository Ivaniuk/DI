@Component({
  selector: 'app-book-item',
  standalone: true,
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  // private booksService = inject(BooksService);

  // book = input.required<Book>();

  bookStatus = // your code

  onChangeBookStatus(bookId, status) {
    // your implementation
  }

  onDeleteBook(bookId, title) {
    // your implementation
  }
}
