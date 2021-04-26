import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable()
export class ProductsService {
  private products: Product[];

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]> {
    if (this.products) {
      return of(this.products);
    }
    return this.httpClient.get<Product[]>('http://localhost:3000/getProducts').pipe(
      tap(data => this.products = data)
    );
  }
  deleteProduct(id: number): Observable<{}> {
    const foundIndex = this.products.findIndex(item => item.id == id);
    if (foundIndex > -1) {
      this.products.splice(foundIndex, 1);
    }
    return of({});
  }
  addNewProduct(product: Product) {
    this.products.push({
      ...product,
      id: Math.floor((Math.random() * 10000) + 1)
    });
  }
}
