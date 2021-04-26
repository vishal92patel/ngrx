import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  displayProductCode: boolean = false;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  onProductDisplayCode(e: any) {
    this.displayProductCode = e.target.checked;
  }
}
