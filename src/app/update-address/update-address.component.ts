import { Component } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../address';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent {
  id:number|undefined;
Addresses:Address=new Address();
  constructor(private addressService: AddressService,private route:ActivatedRoute,private Router:Router){}
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
      this.addressService.getAddressById(this.id).subscribe(data=>{
        this.Addresses=data;
      },error=>console.log(error))
  }
  goToAddresses(){
    this.Router.navigate(['/Addresses'])
  }
  onSubmit(){
    this.id=Number(this.id);
    this.addressService.updateAddresses(this.id,this.Addresses).subscribe(data=>{
        this.goToAddresses();
    },error=>console.log(error));
  }
}
