import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBucket } from '../../core/models/bucket.model';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bucket',
  imports: [AsyncPipe],
  templateUrl: './bucket.html',
  styleUrl: './bucket.scss',
})
export class Bucket {
myBucket$?:Observable<IBucket[]>

constructor(private store:Store<{myBucket:IBucket[]}>){
 // #4 get the data from reducer
  this.myBucket$ = store.select('myBucket')
}
}
