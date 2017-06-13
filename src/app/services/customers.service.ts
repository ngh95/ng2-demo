import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/concat';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/flatMap';

import { Observable } from 'rxjs/Rx';

import { Customer } from '../beans/customer';

@Injectable()
export class CustomersService {

	private cutomers$: Observable<Customer>;

	constructor(private http: Http) { }

	getCustomers = (): Observable<Customer[]> => {
		if (this.cutomers$ !== undefined) {
			return this.cutomers$;
		}
		return this.http.get('/api/customers')
			.map((response: Response): Customer[] => {
				let customers: Customer[] = <Customer[]>response.json();
				return customers;
			})
	}

		getCustomerById = (id:number): Observable<Customer> => {
		if (this.cutomers$ !== undefined) {
			return this.cutomers$;
		}
		return this.http.get('/api/customers/'+ id)
			.map((response: Response): Customer => {
				let customer: Customer = <Customer>response.json();
				return customer;
			})
	}

	addCustomer = (customer: Customer) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let postOptions = new RequestOptions({ headers: headers });
		return this.http.post('/api/customers', JSON.stringify(customer), postOptions)
		// .do( (response: Response) => {
		// 	let addedNews: News = <News>response.json();
		// 	this.theNews = this.theNews
		// 	.concat(Observable.of(addedNews));
		// } );
	}

		deleteCustomer= (id: number) => {
		return this.http.delete('/api/customers/' + id);
	}

}
