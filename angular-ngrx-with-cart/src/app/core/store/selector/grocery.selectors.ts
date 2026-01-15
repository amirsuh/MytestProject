// #5  to select types of grocery

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGrocery } from "../../models/grocery.model";

// #5.0
export const selectGroceries = (state:{grocery:IGrocery[]})=>state.grocery
// #5.1 second type we can create selector
export const selectGroceries2 = createFeatureSelector<IGrocery[]>('grocery')

// #5.2 creaet selector with filter
// export const selectGroceriesByType = createSelector(
//   selectGroceries2,
//   (state)=>{
//     console.log('res')
//     return state.filter(item=>item.type==='snacks')
//   }
// )

// #5.3 creaet selector with filter with type above is custome
export const selectGroceriesByType = (type:string)=>createSelector(
  selectGroceries2,
  (state)=>
     state.filter(item=>item.type===type)

)
