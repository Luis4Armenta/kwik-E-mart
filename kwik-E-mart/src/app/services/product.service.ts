import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { Sale } from '../interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = environment.apiURL;

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.url}/products`);
  }

  doSale(sale: Sale): Observable<saleResponse> {
    return this._http.post<saleResponse>(`${this.url}/sale`, sale)
  }
}

interface saleResponse {
  message: string,
  ok: boolean
}
