import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // get customers
  getCustomers() {
    return this.http.get(`${this.uri}/customers`);
  }
}
