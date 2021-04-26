import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/getProducts');
  }
}
