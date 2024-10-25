import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { BookEditComponent } from "../book-edit/book-edit.component";
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  books = [
    new Book(1, "Atomic Habits", "James Clear", 35),
    new Book(2, "The 7 Habits of Highly Effective People", "Stephen Covey", 30),
    new Book(3, "The 4-Hour Work Week", "Tim Ferriss", 25),
  ];

  action = "";
  bookBeingEdited?: Book;

  changeAction(action: string, book?: Book) {
    this.action = action;
    if (action === 'edit' && book) {
      this.bookBeingEdited = new Book(book.id, book.title, book.author, book.price);
    }
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
    this.changeAction("");
  }

  updateBook(updatedBook: Book) {
    this.books = this.books.map(book => book.id === updatedBook.id ? updatedBook : book);
    this.changeAction("");
  }
}