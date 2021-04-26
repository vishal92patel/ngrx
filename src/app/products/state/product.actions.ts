import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleDisplayProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction('[Product] Set Current Product', props<{ product: Product }>());

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeCurrentProductCode = createAction('[Product] Initialize Current Product');