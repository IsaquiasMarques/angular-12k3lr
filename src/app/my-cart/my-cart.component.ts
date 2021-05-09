import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items;
  checkOutForm;
  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData){

    this.items = this.CartService.clearItems();
    this.checkOutForm.reset();

    console.warn('Your request has been submitted', customerData);

  }

  ngOnInit() {
    this.items = this.CartService.getItems();
  }

}