import { createReducer, on } from "@ngrx/store";
import { IGrocery } from "../../models/grocery.model";
import { groceryAction } from "../action/grocery.action";

// const initialState:IGrocery[] = [
//   {
//     id: 1,
//     name: 'milk',
//     type: 'fruit',
//   },
//   {
//     id: 2,
//     name: 'Banana',
//     type: 'fruit',
//   },
//   {
//     id: 3,
//     name: 'Layc chip',
//     type: 'snacks',
//   },
//   {
//     id: 4,
//     name: 'dorita',
//     type: 'snacks',
//   },
// ];

const initialState:IGrocery[] = []

export const groceryReducer =createReducer(initialState,
  // #8.1 after adding effects in appConfig.config.ts we can call success and failure inside reducer
  on(groceryAction.loadGroceriesSuccess,(state,action)=>{
    return action.payload
  }),
  on(groceryAction.loadGroceriesFailure,(state,action)=>{
    return []
  })
)
