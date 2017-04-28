import { Component, OnInit } from '@angular/core';
import { Customer } from '../../beans/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  name:string="DUPONT";
  fistName:string="Michel";
  address:string="23 rue de la Gare";
  zipCode:string="59200";
  city:string="Seclin";
  phone:string="0324554410";
  email:string="dupont.michel@yahoo.com";

  constructor() { }

  ngOnInit() {
  }

}
