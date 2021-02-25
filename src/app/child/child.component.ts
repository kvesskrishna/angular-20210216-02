import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  message = 'Hello world'
  ngOnInit(): void {}
  // @Input() counter: number = 0;
  // @Output() updateNumber = new EventEmitter();
  // constructor() {}
  // ngOnInit(): void {
  //   console.log(this.counter);
  // }
  // add() {
  //   this.updateNumber.emit(++this.counter);
  // }
}
