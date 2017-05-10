import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../beans/customer';
import { CustomersService } from '../../services/customers.service';

import {Router} from '@angular/router';
import { routing } from '../../app.routing';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // Form
  public customerForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  customers: Customer[] = [];
  currentCustomer: Customer = {};

  constructor(private _fb: FormBuilder, private customersService: CustomersService, 
  private router : Router) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers = () => {
    this.customersService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  deleteCustomer = (customer: Customer) => {
    console.log("deleteCustomer");
    this.customersService.deleteCustomer(customer)
      .subscribe((response: any) => {
        return this.getCustomers();
      });
  }

}
