import { createAction, createReducer, on } from '@ngrx/store';

export const productReducer = createReducer(
    { displayProductCode: true },
    on(createAction('[Product] Toggle Product Code'), state => {
        return {
            ...state,
            displayProductCode: !state.displayProductCode
        };
    })
);