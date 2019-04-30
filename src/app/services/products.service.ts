import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api'

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProduct(id: string) {
    return this._http.get(`${ApiUrl}products/${id}`, { headers: this.getHeaders() });
  }

  getProducts() {
    return this._http.get(`${ApiUrl}products`, { headers: this.getHeaders() });
  }

  deleteProduct(id: number) {
    return this._http.delete(`${ApiUrl}products/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
