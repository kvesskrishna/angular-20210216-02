import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private ns: NameService) {}
  message = 'Hello world';
  custname = this.ns.name;
  ngOnInit(): void {
    console.log('child oninit called');
    this.custname = this.ns.name;
    this.ns.setName('jacks');
    this.custname = this.ns.name;
  }
  @Input() counter: number = 0;
  @Output() updateNumber = new EventEmitter();
  @Output() decNum = new EventEmitter();

  cin() {
    // this.counter++;
    this.updateNumber.emit(++this.counter);
  }
  cde() {
    this.decNum.emit(--this.counter);
  }
  add() {
    this.updateNumber.emit(++this.counter);
  }
}
