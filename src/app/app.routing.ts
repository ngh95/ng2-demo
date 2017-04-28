import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';


import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
	{ path:'home', component: HomeComponent },
	{ path: 'customers', component: CustomersComponent },	
//	{ path: 'customer/:id', component: CustomerInfoComponent },
	{ path: 'login', component: LoginComponent },	
    { path: 'contact', component: ContactComponent },
	{ path: '',	redirectTo: 'home', pathMatch: 'full' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);