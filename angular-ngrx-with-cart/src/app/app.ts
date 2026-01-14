import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grocery } from "./component/grocery/grocery";
import { Bucket } from "./component/bucket/bucket";

@Component({
  selector: 'app-root',
  imports: [Grocery, Bucket],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ngrx-with-cart');
}
