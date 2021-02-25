import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  text = 'This is some text';
  user = { name: 'adf', age: 34 };
  price = 4533;
  date = new Date();
  constructor() {}

  ngOnInit(): void {
    // this.text = this.text.toUpperCase();
  }
}
