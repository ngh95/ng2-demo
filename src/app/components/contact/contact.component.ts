import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string;
  phone: string;
  address: string;
  message: string;

  controlGroup: FormGroup;
  messageCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.messageCtrl = fb.control('', [Validators.required]);
    this.controlGroup = fb.group({
      'messageCtrl': this.messageCtrl
    });
  }
	updateMessage(data: any){
		this.message= data.target.value;
	}
  
	sendMessage(){
		console.log("message to send:" + this.message );
		this.message= "";
	}
  ngOnInit() {
  }

}
