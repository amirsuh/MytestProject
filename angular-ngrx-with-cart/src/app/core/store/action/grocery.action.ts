// #7 Create multiple actions for effects load,success and failure

import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { IGrocery } from "../../models/grocery.model";

//#7.2 seperate creation of action
// export const initGroceriesL = createAction('[Grocery] Load Groceries')
// export const initGroceriesS = createAction('[Grocery] Load Groceries Success')
// export const initGroceriesF = createAction('[Grocery] Load Groceries Failure')

//#7.3 instead of above we can collect it once action
export const groceryAction =createActionGroup({
  source:'Grocery API',
  events:{
    'Load Groceries':emptyProps(),
    'Load Groceries Success':props<{payload:IGrocery[]}>(),
    'Load Groceries Failure':emptyProps()
  }
})
