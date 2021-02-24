import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-table',
  templateUrl: './maths-table.component.html',
  styleUrls: ['./maths-table.component.css'],
})
export class MathsTableComponent implements OnInit {
  number: number;
  range: any;
  table: any;
  listView = true;
  constructor() {}

  ngOnInit(): void {
    this.number = 1;
    this.range = 10;
    this.createTable();
  }
  createTable() {
    this.table = [];
    for (let i = 1; i < parseInt(this.range) + 1; i++) {
      this.table.push(i * this.number);
    }
  }
  changeView(type) {
    this.listView = !this.listView;
  }
}
