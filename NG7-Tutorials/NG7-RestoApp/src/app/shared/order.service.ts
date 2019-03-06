import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder() {
    // tslint:disable-next-line:max-line-length
    const body = { 'OrderID': this.formData.OrderID, 'OrderNo': this.formData.OrderNo, 'CustomerID': this.formData.CustomerID, 'PMethod': this.formData.PMethod, 'GTotal': this.formData.GTotal, OrderItems: this.orderItems };
    return this.http.post(environment.apiURL + '/Order', body);
  }

  getOrderList() {
    return this.http.get(environment.apiURL + '/Order').toPromise();
  }

  getOrderByID(id: number): any {
    return this.http.get(environment.apiURL + '/Order/' + id).toPromise();
  }

  deleteOrder(id: number) {
    return this.http.delete(environment.apiURL + '/Order/' + id).toPromise();
  }
}
