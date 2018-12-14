import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { HttpClient } from '@angular/common/http';

// For routing
import { Router } from '@angular/router';
// For formatting
import {MatTableDataSource} from '@angular/material';
// Interface
import { Customer } from '../../../services/customer.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: Customer[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'address', 'city', 'number', 'status'];
  title = 'Customer List';
  dataSource: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private customerService: CustomersService, private http: HttpClient,
    private router: Router) { }

  getCustomers() {
    this.customerService
    .getCustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
      this.dataSource = new MatTableDataSource(this.customers);
      console.log('Data requested ...');
      console.log(this.customers);
    });
  }
  ngOnInit() {
    this.getCustomers();
  }
}
