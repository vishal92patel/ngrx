import { createAction, createReducer, on } from '@ngrx/store';
import { Product } from '../product';

export interface State {
    products: ProductState
}

export interface ProductState {
    displayProductCode: boolean,
    currentProduct: Product,
    products: Product[]
}

const initialState: ProductState = {
    displayProductCode: true,
    currentProduct: null,
    products: []
}

export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state: ProductState) => {
        return {
            ...state,
            displayProductCode: !state.displayProductCode
        };
    })
);