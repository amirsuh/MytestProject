import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGrocery } from '../../core/models/grocery.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { addToBucket, removeFromBucket } from '../../core/store/action/bucket.action';
import { selectGroceries } from '../../core/store/selector/grocery.selectors';

@Component({
  selector: 'app-grocery',
  imports: [AsyncPipe],
  templateUrl: './grocery.html',
  styleUrl: './grocery.scss',
  changeDetection:ChangeDetectionStrategy.Default
})
export class Grocery {
groceries$?:Observable<IGrocery[]>;

constructor(private store:Store<{grocery:IGrocery[]}>){
  //#1 should be same as app.config.ts reducer
  this.groceries$ = this.store.select(selectGroceries);

}


increment(item:IGrocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    //#1 without actions
    //this.store.dispatch({type:"update",payload:payload})

    //#2.1 with individual values i.e addToBucket({id:payload.id,name:payload.name})
    //#2.2 with single object
    this.store.dispatch(addToBucket({payload}))
  }
  decrement(item:IGrocery){
    const payload = {
      id:item.id
        }

      this.store.dispatch(removeFromBucket({payload}))
      }
}
