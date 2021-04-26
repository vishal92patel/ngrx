import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Store } from "@ngrx/store";
import { getDisplayProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[];
  displayProductCode: boolean;
  constructor(private productsService: ProductsService,
    private store: Store<State>) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
    // ** Without Selector **
    // this.store.select('products').subscribe((e) => {
    //   this.displayProductCode = e.displayProductCode;
    // });
    // ** With Selector **
    this.store.select(getDisplayProductCode).subscribe((res) => {
      this.displayProductCode = res;
    });
  }
  onProductDisplayCode(e: any) {
    this.store.dispatch(ProductActions.toggleDisplayProductCode());
  }
}
