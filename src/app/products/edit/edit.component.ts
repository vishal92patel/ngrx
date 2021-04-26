import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product';
import { getCurrentProduct, State } from '../state/product.reducer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  currentProduct: Product;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(getCurrentProduct).subscribe((res) => {
      this.currentProduct = res;
    })
  }
}
