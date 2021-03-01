import { Component, OnInit } from '@angular/core';
import products from '../data/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  products = products;
  total: number = 0;
  ngOnInit(): void {
    this.getTotal();
  }
  getTotal() {
    this.products.forEach((product) => {
      this.total = this.total + product.quantity * product.price;
    });
  }
  setProductQuantity(e) {
    console.log(e);
    this.products
      .filter((product) => product.id == e.id)
      .forEach((product) => {
        product.quantity =
          e.action == 'add'
            ? ++product.quantity
            : product.quantity > 0
            ? --product.quantity
            : 0;
        this.total = 0;
        this.getTotal();
      });
    // console.log(product);
    // product[0].quantity =
    //   e.action == 'add' ? product[0].quantity++ : product[0].quantity--;
    // this.products.push(product[0]);
  }
}
