import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
//Décorateur
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logo = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png";
  //logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSVsyTE3Rq2DeKnZ9DvrUCTjEv6k0NTDNvw&s"
}
