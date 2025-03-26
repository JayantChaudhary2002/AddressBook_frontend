import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = [
  {path:'Addresses',component:AddressListComponent},
  {path:'create-Address',component:CreateAddressComponent},
  {path:'update-Address/:id',component:UpdateAddressComponent},
  {path:'',redirectTo:'Addresses',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
