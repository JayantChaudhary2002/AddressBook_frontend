import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl="http://localhost:8080/addressbook";
  constructor(private httpClient:HttpClient) { }
  getAddressList():Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.baseUrl}`)
  }
  createAddress(Addresses: Address):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,Addresses);
  }
  getAddressById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  updateAddresses(id:number,Addresses:Address):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,Addresses);
  }
  deleteAddresses(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
