import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  
  // addOrders(orders){
  //   let order=[];
  //   if(localStorage.setItem('Orders')){
  //     order = JSON.parse(localStorage.setItem('Orders'))
  //     order = [orders, ...orders]
  //   }
  //   localStorage.setItem('User', JSON.stringify(this.user))
  // }
}
