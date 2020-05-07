import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../shared/services/customer.service';
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ws-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public customer$ = new BehaviorSubject<CustomerModel[]>([]);

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

}
