import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { CustomerModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:3000/customers';
  private dataSource$ = new BehaviorSubject<CustomerModel[]>([]);
  data: Observable<CustomerModel[]> = this.dataSource$.asObservable() as Observable<CustomerModel[]>;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CustomerModel[]>(this.url).subscribe((data: CustomerModel[]) => {
      this.dataSource$.next(data);
    });
  }
}
