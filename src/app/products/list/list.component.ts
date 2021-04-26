import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Store } from "@ngrx/store";
import { getCurrentProduct, getDisplayProductCode, getError, getProducts, State, } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[];
  displayProductCode: boolean;
  currentProduct: Product;
  error: any;
  constructor(private productsService: ProductsService,
    private store: Store<State>) { }

  ngOnInit(): void {
    // this.productsService.getProducts().subscribe((res) => {
    //   this.products = res;
    // });
    this.store.select(getProducts).subscribe((res) => {
      this.products = res;
    });
    this.store.dispatch(ProductActions.loadProducts());


    // ** Without Selector **
    // this.store.select('products').subscribe((e) => {
    //   this.displayProductCode = e.displayProductCode;
    // });
    // ** With Selector **
    this.store.select(getDisplayProductCode).subscribe((res) => {
      this.displayProductCode = res;
    });
    this.store.select(getCurrentProduct).subscribe((res) => {
      this.currentProduct = res;
    });

    this.store.select(getError).subscribe((res) => {
      this.error = res;
      if (res && res.message) {
        this.error = res.message;
      } 
    });
  }
  onProductDisplayCode(e: any) {
    this.store.dispatch(ProductActions.toggleDisplayProductCode());
  }
  onProductClick(product: Product) {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  }
  onAddNew() {
    this.store.dispatch(ProductActions.initializeCurrentProductCode());
  }
}
