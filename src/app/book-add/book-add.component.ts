import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';  // Make sure this import path is correct

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css' ]  // Corrected `styleUrls`
})
export class BookAddComponent {
  @Input() lastId?: number;
  @Output() bookAdded = new EventEmitter<Book>();

  addBook(title: string, author: string, price: number) {
    const newId = this.lastId ? this.lastId + 1 : 1;  // Ensure lastId is defined, fallback to 1 if not
    const newBook = new Book(newId, title, author, price);
    this.bookAdded.emit(newBook);
    console.log(newBook);
  }
}
