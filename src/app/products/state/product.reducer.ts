import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from '../product';

// We can extends this with appState if exist (ex:),
// create this to use in component, 
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

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getDisplayProductCode = createSelector(
    getProductFeatureState,
    state => state.displayProductCode
);
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
)


export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state: ProductState) => {
        return {
            ...state,
            displayProductCode: !state.displayProductCode
        };
    })
);