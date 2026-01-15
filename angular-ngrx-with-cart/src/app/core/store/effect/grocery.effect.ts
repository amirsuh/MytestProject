// #6 creaet Effects to make action asynchronous
// Action {pause-action} => (effects) => {resume action} reducers check effects image in imag folder


import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GrocerySe } from '../../service/grocery-se';
import { groceryAction } from '../action/grocery.action';

@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService = inject(GrocerySe);

  loadGroceries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groceryAction.loadGroceries),
      exhaustMap(() =>
        this.groceryService.fetchAllGroceries().pipe(
          map((groceries:any) => (groceryAction.loadGroceriesSuccess({payload:groceries}))),
          catchError(() => of(groceryAction.loadGroceriesFailure()))
        )
      )
    );
  });
}

