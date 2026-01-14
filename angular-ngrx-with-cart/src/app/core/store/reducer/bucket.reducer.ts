import { createReducer, on } from "@ngrx/store";
import { IBucket } from "../../models/bucket.model";
import { addToBucket, removeFromBucket } from "../action/bucket.action";

//#3 create reducer for Bucket
const initialState:IBucket[] = [];

//#3.1 Listen to addtobucket
export const bucketReducer = createReducer(initialState,
  on(addToBucket,(state,action)=>{
    //3.2 if item is present in bucket then need to increment quantity
    const bucketItem =  state.find(item=>item.id===action.payload.id)
    if(bucketItem){
   return state.map(item=>item.id===action.payload.id? {...item,quantity:item.quantity+action.payload.quantity}:item)
    }else{
     return [
      //prev state
      ...state,
      //append new state
      action.payload
     ]
    }

  }),
  //3.3 to remove from bucket
  on(removeFromBucket,(state,action)=>{
    const bucketItem =  state.find(item=>item.id===action.payload.id)
    if(bucketItem && bucketItem.quantity>1){
     return state.map(item=>item.id===action.payload.id? {...item,quantity:item.quantity-1}:item)
    }else{
      return state.filter(item=>item.id!==action.payload.id)
    }

  })
)
