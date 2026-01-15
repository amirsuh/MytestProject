import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGrocery } from '../../core/models/grocery.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { addToBucket, removeFromBucket } from '../../core/store/action/bucket.action';
import { selectGroceries, selectGroceriesByType } from '../../core/store/selector/grocery.selectors';

@Component({
  selector: 'app-grocery',
  imports: [AsyncPipe],
  templateUrl: './grocery.html',
  styleUrl: './grocery.scss',
  changeDetection:ChangeDetectionStrategy.Default
})
export class Grocery {
groceries$?:Observable<IGrocery[]>;
filteredGroceries$?:Observable<IGrocery[]>;
constructor(private store:Store<{grocery:IGrocery[]}>){
  //#1 should be same as app.config.ts reducer
  this.groceries$ =  this.store.select(selectGroceries)

  // to understand how selectors memoized to better perfomance transform data prev showing on UI same thing put in app.ts use #5.3
  // this.store.select(selectGroceriesByType).subscribe(res=>{
  //   console.log('data2 ',res)
  // })
this.store.select(selectGroceries).subscribe(res=>{
    console.log('data2 ',res)
  })
}
onTypeChange(event:Event){
//#5.4 to filter data via filter pass valeu
const valeu = (event.target as HTMLSelectElement).value
if(valeu) this.filteredGroceries$ = this.store.select(selectGroceriesByType(valeu))
  else this.filteredGroceries$ = undefined
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
