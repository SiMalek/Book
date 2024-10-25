import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnChanges {
  @Input() bookToEdit!: Book;
  @Output() bookUpdated = new EventEmitter<Book>();

  tempBook: Book = new Book(0, '', '', 0);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.tempBook = new Book(this.bookToEdit.id, this.bookToEdit.title, this.bookToEdit.author, this.bookToEdit.price);
    }
  }

  updateBook() {
    this.bookUpdated.emit(this.tempBook);
  }
}