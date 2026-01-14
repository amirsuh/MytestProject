import { createAction, props } from "@ngrx/store";
import { IBucket } from "../../models/bucket.model";


export const addToBucket = createAction('[Bucket] Add',props<{payload:IBucket}>())

export const removeFromBucket = createAction('[Bucket] Remove',props<{payload:Partial<IBucket>}>())
