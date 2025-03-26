import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit{
  Addresses:Address=new Address();
  constructor(private addressService: AddressService,
    private Router:Router
  ){}
  ngOnInit(): void {
      
  }
  saveAddress(){
      this.addressService.createAddress(this.Addresses).subscribe(data=>{
        console.log(data)
        this.goToAddresses()
      },error=>console.log(error))
      
  }
  goToAddresses(){
    this.Router.navigate(['/Addresses'])
  }
  onSubmit(){
    this.saveAddress()
  }
}
