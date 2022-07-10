import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  public dated = new Date();
  todaysDate = this.dated
  showModel: boolean = false;
  itemsForm: boolean = false;
  customers: Array<any> = [];
  orderList: FormGroup;
  itemData: any;
  proceedButton: boolean = false;
  userOrder: any = {};

  customerForm = this.fb.group({
    customerName: ['', Validators.required]
  })
 
  constructor( public fb: FormBuilder, public dataservice: DataServiceService) { 
    this.itemData = [];
    this.orderList = this.fb.group({
      itemName: ['', Validators.required],
      quantity:['', Validators.required],
      itemPrice: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if(!localStorage.getItem('users')) localStorage.setItem('users', '[]')
    this.loadCustomers()
  }

  submitCustomerName(){
    if(this.customerForm.invalid){
      return
    }else{
      this.itemsForm = true;
    }
    console.log(this.customerForm.value.customerName)
  }

  loadCustomers() {
    this.customers = JSON.parse(localStorage.getItem('users') ?? '[]')
  }

  public addItem(): void{
    console.log(this.itemData)
    console.log(this.orderList)
    if(this.orderList.status == "INVALID"){
      return
    }else{
    this.proceedButton = true;
    this.itemData.push(this.orderList.value);
    this.orderList.reset();
    }
  }

  reset(){
    this.orderList.reset();
  }

  removeItem(element: any){
    this.itemData.forEach((value: any, index: any)=>{
      if(value == element)
      this.itemData.splice(index, 1);
    })
  }

  confirmOrder(){
    console.log(this.customerForm.value);
    console.log(this.orderList.value);
    console.log(this.itemData)
    const sum = this.itemData.reduce((s: any, item: any) => s+item.itemPrice, 0)
    let finalObject = {
      'name': this.customerForm.value.customerName,
      'orders': this.itemData,
      'OrderDueDate': this.todaysDate,
      'CustomerAddress'	: 'Hyderabad',
      'CustomerPhone': '9876543210'	,
      'OrderTotal': sum,
    }
    console.log(finalObject)
    this.userOrder = Object.assign(this.userOrder, finalObject)
    this.addCustomer(finalObject)
    this.orderList.reset();
    this.customerForm.reset();
    this.customers = [];
    this.showModel = false;
    this.loadCustomers()
  }

  addCustomer(user: any = {}){
    const existingUsers = JSON.parse(localStorage.getItem('users') ?? '[]')
    localStorage.setItem('users', JSON.stringify([...existingUsers, user]))
  }
}
