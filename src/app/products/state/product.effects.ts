import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { ProductsService } from '../products.service';
import * as ProductActions from '../state/product.actions';

@Injectable()
export class ProductEffects {
    constructor(private actions: Actions,
        private productsService: ProductsService) {}

    loadProducts = createEffect(() => {
        return this.actions.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.productsService.getProducts().pipe(
                map(products => ProductActions.loadProductsSuccsee({products}))
            ))
        )
    }
    )
}