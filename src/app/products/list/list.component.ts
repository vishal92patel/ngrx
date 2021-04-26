import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Store } from "@ngrx/store";
import { ProductState, State } from '../state/product.reducer';

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
    this.store.select('products').subscribe((e) => {
      this.displayProductCode = e.displayProductCode;
    })
  }
  onProductDisplayCode(e: any) {
    this.store.dispatch(
      { type: "[Product] Toggle Product Code" }
    )
  }
}
