import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product';
import { getCurrentProduct, ProductState, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  currentProduct: Product;
  // formData: Product = {
  //   description: "",
  //   id: 0,
  //   productCode: "",
  //   productName: ""
  // }
  constructor(private store: Store<State>, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.store.select(getCurrentProduct).subscribe((res) => {
      this.currentProduct = res;
    })
  }
  onSave(currentProduct: Product) {
    if (currentProduct.id == 0) {
      this.productsService.addNewProduct(currentProduct);
      this.store.dispatch(ProductActions.clearCurrentProduct());
    }
  }
  onDelete(currentProduct: Product) {
    if (currentProduct.id != 0) {
      this.productsService.deleteProduct(currentProduct.id).subscribe((res) => {
        this.store.dispatch(ProductActions.clearCurrentProduct());
      })
    } else {
      this.store.dispatch(ProductActions.clearCurrentProduct())
    }
  }
  onCancel(currentProduct: Product) {
    this.store.dispatch(ProductActions.clearCurrentProduct())
  }
}
