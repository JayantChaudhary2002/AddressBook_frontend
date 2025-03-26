import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  Addresses: Address[] = []; // Initialize to an empty array

  constructor(private addressService: AddressService, private Router:Router) {}

  ngOnInit(): void {
    this.getAddress();
  }

  private getAddress() {
    this.addressService.getAddressList().subscribe(
      data => {
        console.log("Fetched Addresses:", data); // Logging data to console
        this.Addresses = data;
      },
      error => {
        console.error("Error fetching addresses:", error); // Log errors if any
      }
    );
  } 
  updateAddress(id:number|undefined){
    this.Router.navigate(['/update-Address',id]);
  }
  deleteAddress(id:number|undefined){
    id=Number(id);
    this.addressService.deleteAddresses(id).subscribe(data=>{
      this.getAddress();
    })
  }
}
