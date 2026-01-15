import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grocery } from "./component/grocery/grocery";
import { Bucket } from "./component/bucket/bucket";
import { Store } from '@ngrx/store';
import { IGrocery } from './core/models/grocery.model';
import { selectGroceriesByType } from './core/store/selector/grocery.selectors';

@Component({
  selector: 'app-root',
  imports: [Grocery, Bucket],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ngrx-with-cart');

  // constructor(private store:Store<{grocery:IGrocery[]}>){
  // //#1 should be same as app.config.ts reducer
  // // this.groceries$ =
  // this.store.select(selectGroceriesByType).subscribe(res=>{
  //   console.log('data1 ',res)
  // })

// }
}
