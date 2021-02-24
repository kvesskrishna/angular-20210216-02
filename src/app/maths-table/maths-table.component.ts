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
  listView: string = 'table';
  tableStyles = {
    boldtable: false,
    shadowedTable: true,
  };
  tableColor = {
    'table-dark': true,
    'table-primary': false,
    'table-success': false,
    'table-danger': false,
  };
  constructor() {}
  changeColor(c) {
    for (let key in this.tableColor) {
      this.tableColor[key] = key == c ? true : false;
    }
  }
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
    this.listView = type;
  }
}
