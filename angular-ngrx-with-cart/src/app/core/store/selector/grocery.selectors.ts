// #5  to select types of grocery

import { IGrocery } from "../../models/grocery.model";


export const selectGroceries = (state:{grocery:IGrocery[]})=>state.grocery
