import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/Material';
import { OrderItem } from '../../shared/order-item.model';
import { ItemService } from '../../shared/item.service';
import { Item } from '../../shared/item.model';
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styles: []
})
export class OrderItemComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid: Boolean = true;

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<OrderItemComponent>, private itemService: ItemService, private orderService: OrderService) { }

  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
    if (this.data.orderItemIndex == null) {
      this.formData = {
        OrderItemID: 0,
        OrderID: this.data.OrderID,
        ItemID: 0,
        ItemName: '',
        Price: 0,
        Quantity: 0,
        Total: 0
      };
    } else {
      this.formData = Object.assign({}, this.orderService.orderItems[this.data.orderItemIndex]);
    }
  }

  updatePrice(ctrl) {
    let selIndexVal: number = (ctrl.selectedIndex);
    const chooseselindexVal: number = selIndexVal - 1;

    if (selIndexVal = 0) {
      this.formData.Price = 0;
      this.formData.ItemName = '';
    } else {
      this.formData.Price = this.itemList[chooseselindexVal].Price;
      this.formData.ItemName = this.itemList[chooseselindexVal].Name;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
  }

  validateForm(formData: OrderItem) {
    this.isValid = true;
    if (formData.ItemID <= 0) {
      this.isValid = false;
    } else if (formData.Quantity <= 0) {
      this.isValid = false;
    }
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null) {
        this.orderService.orderItems.push(form.value);
      } else {
        this.orderService.orderItems[this.data.orderItemIndex] = form.value;
      }
      this.dialogRef.close();
    }
  }
}
