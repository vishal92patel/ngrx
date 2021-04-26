import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from '../product';
import * as ProductActions from '../state/product.actions';

// We can extends this with appState if exist (ex:),
// create this to use in component, 
export interface State {
    products: ProductState
}

export interface ProductState {
    displayProductCode: boolean,
    currentProduct: Product,
    products: Product[],
    error: any
}

const initialState: ProductState = {
    displayProductCode: true,
    currentProduct: null,
    products: [],
    error: null
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
);
export const getError = createSelector(
    getProductFeatureState,
    state => state.error
)


export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleDisplayProductCode, (state: ProductState) => {
        return {
            ...state,
            displayProductCode: !state.displayProductCode
        };
    }),
    on(ProductActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product
        }
    }),
    on(ProductActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: null
        }
    }),
    on(ProductActions.initializeCurrentProductCode, (state): ProductState => {
        return {
            ...state,
            currentProduct: {
                description: "",
                id: 0,
                productCode: "",
                productName: ""
            }
        }
    }),
    on(ProductActions.loadProductsSuccsee, (state, action): ProductState => {
        return {
            ...state,
            products: action.products
        }
    }),
    // For testing purpose only created in both effects and reducer
    // on(ProductActions.loadProducts, (state) => {
    //     return {
    //         ...state
    //     }
    // })
    on(ProductActions.loadProductsFail, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        }
    })
);