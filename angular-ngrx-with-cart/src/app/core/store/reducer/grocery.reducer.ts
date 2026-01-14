import { createReducer } from "@ngrx/store";
import { IGrocery } from "../../models/grocery.model";

const initialState:IGrocery[] = [
  {
    id: 1,
    name: 'milk',
    type: 'fruit',
  },
  {
    id: 2,
    name: 'Banana',
    type: 'fruit',
  },
  {
    id: 3,
    name: 'Layc chip',
    type: 'snacks',
  },
  {
    id: 4,
    name: 'dorita',
    type: 'snacks',
  },
];

export const groceryReducer =createReducer(initialState)
