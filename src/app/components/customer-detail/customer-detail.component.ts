import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../beans/customer';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute  }  from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  // Form
 // public customerForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  formCustomer: Customer = {};

  customerId : number;
  customer:Customer = {};
  private sub: any;

  constructor(private _fb: FormBuilder, private customersService: CustomersService,  private route: ActivatedRoute) { }

  ngOnInit() {
    // this.customerForm = this._fb.group({
    //   name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    //   firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
    //   email: ['', [<any>Validators.required, <any>Validators.email]],
    //   address: this._fb.group({
    //     street: ['', <any>Validators.required],
    //     zipCode: ['',<any>Validators.maxLength(5)],
    //     city: ['', <any>Validators.required]
    //   }),
    //   tel :['',<any>Validators.maxLength(10)]
    // });
  this.sub = this.route.params.subscribe( params => {
        this.customerId = +params['id'];
	   	this.customersService.getCustomerById(this.customerId)
			.subscribe((customer: Customer) => {
				this.customer = customer;
        console.log('nom=' + customer.cli_nom);
        console.log('prenom=' + customer.cli_prenom);
			});
    	});

    // this. subcribeToFormChanges();
  //  return this.getCustomerById(this.id);
  }

    addCustomer = () => {
    console.log("addCustomer");
    this.customersService.addCustomer(this.formCustomer)
    .subscribe((response: any) => {
      console.log("response value=" + response);
        return this.formCustomer;
      });
  }

  getCustomerById = (id:number) => {
    this.customersService.getCustomerById(id).subscribe((customer: Customer) => {
      return this.customer;
    });
  }

  // subcribeToFormChanges() {
  //   const myFormStatusChanges$ = this.customerForm.statusChanges;
  //   const myFormValueChanges$ = this.customerForm.valueChanges;

  //   myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
  //   myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  // }
}
