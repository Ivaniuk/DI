import { BookItemComponent } from './book-item/book-item.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
  imports: [BookItemComponent],
})
export class BooksListComponent {
  
  books = // your code

  onChangeBooksFilter(filter) {
    // your implementation
  }
}
