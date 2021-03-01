import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() setQuantity = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updateQuantity(action, id) {
    this.setQuantity.emit({ action: action, id: id });
  }
}
